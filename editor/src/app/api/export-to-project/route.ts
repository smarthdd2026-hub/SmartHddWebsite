import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const translations = await request.json();
    
    // Write directly to the main project's messages folder
    const messagesPath = join(process.cwd(), '..', 'messages');
    
    // Ensure directory exists
    try {
      await mkdir(messagesPath, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }
    
    // Write each language file
    await Promise.all([
      writeFile(
        join(messagesPath, 'en.json'),
        JSON.stringify(translations.en, null, 2)
      ),
      writeFile(
        join(messagesPath, 'he.json'),
        JSON.stringify(translations.he, null, 2)
      ),
      writeFile(
        join(messagesPath, 'ru.json'),
        JSON.stringify(translations.ru, null, 2)
      )
    ]);
    
    return NextResponse.json({ 
      success: true,
      message: 'Translation files updated successfully'
    });
  } catch (error) {
    console.error('Error exporting to project:', error);
    return NextResponse.json({ 
      error: 'Failed to export to project',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
