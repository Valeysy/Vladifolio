import { Grid } from '@/once-ui/components';
import Document from './Document';
import { readdirSync, statSync } from 'fs';
import path from 'path';

interface DocumentsProps {
    columns?: '1' | '2' | '3';
    direction?: 'row' | 'column';
    thumbnail?: boolean;
}

// Function to get files from the public/documents directory
function getDocumentFiles() {
  const documentsDir = path.join(process.cwd(), 'public', 'documents');
  
  try {
    const files = readdirSync(documentsDir);
    
    return files.map(filename => {
      const filePath = path.join(documentsDir, filename);
      const stats = statSync(filePath);
      
      // We could associate specific thumbnails to certain files
      // based on their name or extension
      let thumbnail;
      
      // For example, you could add logic like:
      // if (filename.includes('report')) {
      //   thumbnail = '/images/gallery/report-thumbnail.jpg';
      // }
      
      return {
        name: filename,
        path: `/documents/${filename}`,
        size: Math.round(stats.size / 1024), // Size in KB
        lastModified: stats.mtime,
        thumbnail // undefined by default, will be handled in Document component
      };
    });
  } catch (error) {
    console.error("Error reading documents directory:", error);
    return [];
  }
}

export function Documents({
    columns = '3',
    direction = 'column',
    thumbnail = false
}: DocumentsProps) {
    const documents = getDocumentFiles();

    return (
        <>
            {documents.length > 0 ? (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="32">
                    {documents.map((doc, index) => (
                        <Document
                            key={index}
                            document={doc}
                            direction={direction}
                            thumbnail={thumbnail}
                        />
                    ))}
                </Grid>
            ) : (
                <Document empty />
            )}
        </>
    );
} 