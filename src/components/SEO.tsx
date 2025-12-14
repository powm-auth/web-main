import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

export const SEO = ({ title, description, keywords, image, url }: SEOProps) => {
    const { t } = useTranslation();

    const siteTitle = 'Powm';
    const defaultDescription = t('seo.defaultDescription', 'Prove the age. Not the identity. Fast private proofs without revealing everything.');
    const defaultKeywords = t('seo.defaultKeywords', 'identity, privacy, zero knowledge, proof of age, wallet');
    const siteUrl = window.location.origin;
    const defaultImage = '/og-image.png'; // Ensure this image exists in public folder

    const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${defaultImage}`;
    const metaUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : window.location.href;

    return (
        <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />

            {/* Canonical */}
            <link rel="canonical" href={metaUrl} />
        </Helmet>
    );
};
