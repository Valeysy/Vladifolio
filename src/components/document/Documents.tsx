import { Grid } from '@/once-ui/components';
import Document from './Document';
import { getPosts } from '@/app/utils/utils';

interface DocumentsProps {
    columns?: '1' | '2' | '3';
    direction?: 'row' | 'column';
    thumbnail?: boolean;
}

export function Documents({
    columns = '3',
    direction = 'column',
    thumbnail = false
}: DocumentsProps) {
    // Use the getPosts utility to read all markdown files from document/posts directory
    const documents = getPosts(['src', 'app', 'document', 'posts']);

    // Sort documents by publishedAt date
    const sortedDocuments = documents.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    return (
        <>
            {sortedDocuments.length > 0 ? (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="32">
                    {sortedDocuments.map((doc, index) => (
                        <Document
                            key={index}
                            document={{
                                title: doc.metadata.title,
                                summary: doc.metadata.summary,
                                publishedAt: doc.metadata.publishedAt,
                                tag: doc.metadata.tag,
                                image: doc.metadata.image,
                                file: doc.metadata.file,
                            }}
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