import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readdir, unlink } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const key = formData.get('key') as string;
    
    if (!file || !key) {
      return NextResponse.json({ error: 'Missing file or key' }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Determine target directory based on file type
    const extension = file.name.split('.').pop()?.toLowerCase() || '';
    let targetDir: string;
    let targetPath: string;
    
    if (key === 'favicon') {
      // Favicon goes to public root
      targetDir = join(process.cwd(), '..', 'public');
      
      // Delete any existing favicon files
      try {
        const files = await readdir(targetDir);
        for (const f of files) {
          if (f.startsWith('favicon.')) {
            await unlink(join(targetDir, f));
          }
        }
      } catch (err) {
        // Directory might not exist yet
      }
      
      targetPath = `/favicon.${extension}`;
    } else {
      // Other images go to public/images
      targetDir = join(process.cwd(), '..', 'public', 'images');
      
      // Delete any existing files with this key
      try {
        const files = await readdir(targetDir);
        for (const f of files) {
          if (f.startsWith(`${key}.`)) {
            await unlink(join(targetDir, f));
          }
        }
      } catch (err) {
        // Directory might not exist yet
      }
      
      targetPath = `/images/${key}.${extension}`;
    }
    
    // Ensure directory exists
    await mkdir(targetDir, { recursive: true });

    // Generate filename and write file
    const filename = key === 'favicon' ? `favicon.${extension}` : `${key}.${extension}`;
    const filepath = join(targetDir, filename);
    await writeFile(filepath, buffer);

    return NextResponse.json({ 
      success: true,
      filename,
      path: targetPath
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ 
      error: 'Failed to upload image',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
