import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const locale = searchParams.get('locale') || 'en';
    
    // Read from the main project's messages folder
    const filePath = join(process.cwd(), '..', 'messages', `${locale}.json`);
    const content = await readFile(filePath, 'utf-8');
    const data = JSON.parse(content);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading translations:', error);
    return NextResponse.json({ error: 'Failed to load translations' }, { status: 500 });
  }
}
