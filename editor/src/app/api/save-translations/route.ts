import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const translations = await request.json();
    
    // Save to temporary editor storage
    const editorDataPath = join(process.cwd(), 'data');
    await writeFile(
      join(editorDataPath, 'translations.json'),
      JSON.stringify(translations, null, 2)
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving translations:', error);
    return NextResponse.json({ error: 'Failed to save translations' }, { status: 500 });
  }
}
