import path from 'path';
import { promises as fs } from 'fs'; // For async file operations
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fileType = searchParams.get('file'); // Get 'en' or 'fr' from query param

    let fileName;
    let filePath;
    let downloadedFileName;

    if (fileType === 'en') {
        fileName = 'Hakam_Koubaa_CV_EN.pdf';
        downloadedFileName = 'hakamkoubaa_resume_en.pdf'; // Desired download name
    } else if (fileType === 'fr') {
        fileName = 'Hakam_Koubaa_CV_FR.pdf';
        downloadedFileName = 'hakamkoubaa_resume_fr.pdf'; // Desired download name
    } else {
        // Handle invalid or missing file type
        return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    // Construct the absolute path to the PDF file in the public directory
    // IMPORTANT: In production on Vercel, `process.cwd()` refers to the project root.
    // Static files in `public` are served from the root.
    filePath = path.join(process.cwd(), 'public', 'static-portfolio', 'assets', 'CV', fileName);

    try {
        const fileBuffer = await fs.readFile(filePath);

        // Set the appropriate headers for file download
        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf'); // Mime type for PDF
        headers.set('Content-Disposition', `attachment; filename="${downloadedFileName}"`); // Force download with custom name
        headers.set('Content-Length', fileBuffer.length.toString()); // Important for Vercel edge functions

        return new NextResponse(fileBuffer, { headers });

    } catch (error) {
        console.error('Error serving PDF:', error);
        return NextResponse.json({ error: 'File not found or unable to read' }, { status: 404 });
    }
}