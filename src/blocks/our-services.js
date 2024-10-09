import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

registerBlockType('people-studio/our-services', {
    title: 'Our Services',
    icon: 'admin-tools',
    category: 'layout',
    attributes: {
        sectionTitle: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: 'Our Services',
        },
        services: {
            type: 'array',
            default: [
                { image: null, title: 'Service 1', subtitle: 'Subtitle 1', text: 'Description for service 1' },
                { image: null, title: 'Service 2', subtitle: 'Subtitle 2', text: 'Description for service 2' },
                { image: null, title: 'Service 3', subtitle: 'Subtitle 3', text: 'Description for service 3' },
            ],
        },
        service1Image: { type: 'string', default: null },
        service2Image: { type: 'string', default: null },
        service3Image: { type: 'string', default: null },
    },
    edit({ attributes, setAttributes }) {
        const { sectionTitle, services, service1Image, service2Image, service3Image } = attributes;

        const updateService = (index, field, value) => {
            const updatedServices = [...services];
            updatedServices[index][field] = value;
            setAttributes({ services: updatedServices });
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Section Settings" initialOpen={true}>
                        <RichText
                            tagName="h2"
                            value={sectionTitle}
                            onChange={(value) => setAttributes({ sectionTitle: value })}
                            placeholder="Enter section title"
                        />
                    </PanelBody>
                    <PanelBody title="Service 1 Image" initialOpen={false}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ service1Image: media.url })}
                            allowedTypes={['image']}
                            value={service1Image}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {!service1Image ? 'Upload Service 1 Image' : 'Change Service 1 Image'}
                                </Button>
                            )}
                        />
                        {service1Image && <img src={service1Image} alt="Service 1" className="w-full mt-2" />}
                    </PanelBody>
                    <PanelBody title="Service 2 Image" initialOpen={false}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ service2Image: media.url })}
                            allowedTypes={['image']}
                            value={service2Image}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {!service2Image ? 'Upload Service 2 Image' : 'Change Service 2 Image'}
                                </Button>
                            )}
                        />
                        {service2Image && <img src={service2Image} alt="Service 2" className="w-full mt-2" />}
                    </PanelBody>
                    <PanelBody title="Service 3 Image" initialOpen={false}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ service3Image: media.url })}
                            allowedTypes={['image']}
                            value={service3Image}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {!service3Image ? 'Upload Service 3 Image' : 'Change Service 3 Image'}
                                </Button>
                            )}
                        />
                        {service3Image && <img src={service3Image} alt="Service 3" className="w-full mt-2" />}
                    </PanelBody>
                </InspectorControls>

                <div className="our-services p-14" id="our-services">
                    <RichText
                        tagName="h2"
                        value={sectionTitle}
                        onChange={(value) => setAttributes({ sectionTitle: value })}
                        className="font-bold text-4xl mb-8"
                        placeholder="Enter section title"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div className="service-card bg-gray-100 rounded-lg shadow-lg" key={index}>
                                <div className="mb-4">
                                    <img
                                        src={
                                            index === 0 ? service1Image :
                                            index === 1 ? service2Image : service3Image
                                        }
                                        alt={`Service ${index + 1}`}
                                        className="w-full h-auto mb-4 mx-auto"
                                    />
                                </div>
                                <div className="p-6">
                                    <RichText
                                        tagName="h3"
                                        value={service.title}
                                        onChange={(value) => updateService(index, 'title', value)}
                                        className="font-bold text-xl mb-2"
                                        placeholder="Service Title"
                                    />
                                    <RichText
                                        tagName="h4"
                                        value={service.subtitle}
                                        onChange={(value) => updateService(index, 'subtitle', value)}
                                        className="font-bold text-lg mb-2"
                                        placeholder="Service Subtitle"
                                    />
                                    <RichText
                                        tagName="p"
                                        value={service.text}
                                        onChange={(value) => updateService(index, 'text', value)}
                                        placeholder="Service Description"
                                        allowedFormats={['core/bold']} // Esto permite formatear como negrita
                                        className="text-base"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation for Mobile */}
                    <div className="sticky bottom-0 left-0 w-full bg-white py-2 md:hidden flex justify-around border-t border-gray-300">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => document.getElementById(`service-${index + 1}`).scrollIntoView({ behavior: 'smooth' })}
                                className="font-medium text-sm text-gray-700 hover:text-gray-900 transition"
                            >
                                {service.title}
                            </button>
                        ))}
                    </div>
                </div>
            </Fragment>
        );
    },
    save({ attributes }) {
        const { sectionTitle, services, service1Image, service2Image, service3Image } = attributes;

        return (
            <div className="our-services p-14" id="our-services">
                <h2 className="font-bold text-4xl mb-8">{sectionTitle}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div className="service-card bg-gray-100 rounded-lg shadow-lg" key={index} id={`service-${index + 1}`}>
                            {index === 0 && service1Image && <img src={service1Image} alt="Service 1" className="w-full h-auto mb-4" />}
                            {index === 1 && service2Image && <img src={service2Image} alt="Service 2" className="w-full h-auto mb-4" />}
                            {index === 2 && service3Image && <img src={service3Image} alt="Service 3" className="w-full h-auto mb-4" />}
                            <div className="p-6">
                                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                                <h4 className="font-bold text-lg mb-2">{service.subtitle}</h4>
                                <RichText.Content
                                    tagName="p"
                                    value={service.text}
                                    className="text-base"
                                />

                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation for Mobile */}
                <div className="sticky bottom-0 left-0 w-full bg-white py-2 md:hidden flex justify-around border-t border-gray-300">
                    {services.map((service, index) => (
                        <button
                            key={index}
                            onClick={() => document.getElementById(`service-${index + 1}`).scrollIntoView({ behavior: 'smooth' })}
                            className="font-medium text-sm text-gray-700 hover:text-gray-900 transition"
                        >
                            {service.title}
                        </button>
                    ))}
                </div>
            </div>
        );
    },
});
