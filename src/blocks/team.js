import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

registerBlockType('people-studio/team-section', {
    title: 'Team Section',
    icon: 'groups',
    category: 'layout',
    attributes: {
        sectionTitle: {
            type: 'string',
            source: 'html',
            selector: 'h2',
            default: 'Meet Our Team',
        },
        teamMembers: {
            type: 'array',
            default: [
                { name: 'Person 1', description: 'Description for Person 1' },
                { name: 'Person 2', description: 'Description for Person 2' },
                { name: 'Person 3', description: 'Description for Person 3' },
            ],
        },
        member1Image: { type: 'string', default: null },
        member2Image: { type: 'string', default: null },
        member3Image: { type: 'string', default: null },
        member1Email: { type: 'string', default: '#' },
        member2Email: { type: 'string', default: '#' },
        member3Email: { type: 'string', default: '#' },
        member1LinkedIn: { type: 'string', default: '#' },
        member2LinkedIn: { type: 'string', default: '#' },
        member3LinkedIn: { type: 'string', default: '#' },
    },
    edit({ attributes, setAttributes }) {
        const { sectionTitle, teamMembers, member1Image, member2Image, member3Image, member1Email, member2Email, member3Email, member1LinkedIn, member2LinkedIn, member3LinkedIn } = attributes;

        const updateMember = (index, field, value) => {
            const updatedMembers = [...teamMembers];
            updatedMembers[index] = {
                ...updatedMembers[index],
                [field]: value,
            };
            setAttributes({ teamMembers: updatedMembers });
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title="Section Title" initialOpen={true}>
                        <RichText
                            tagName="h2"
                            value={sectionTitle}
                            onChange={(value) => setAttributes({ sectionTitle: value })}
                            placeholder="Enter section title"
                        />
                    </PanelBody>

                    {/* Panel for Member 1 */}
                    <PanelBody title="Member 1 Settings" initialOpen={false}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ member1Image: media.url })}
                            allowedTypes={['image']}
                            value={member1Image}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {!member1Image ? 'Upload Member 1 Image' : 'Change Member 1 Image'}
                                </Button>
                            )}
                        />
                        {member1Image && <img src={member1Image} alt="Member 1" className="w-full mt-2 rounded-full" />}
                        <TextControl
                            label="Email URL"
                            value={member1Email}
                            onChange={(value) => setAttributes({ member1Email: value })}
                            placeholder="Enter email URL"
                        />
                        <TextControl
                            label="LinkedIn URL"
                            value={member1LinkedIn}
                            onChange={(value) => setAttributes({ member1LinkedIn: value })}
                            placeholder="Enter LinkedIn URL"
                        />
                    </PanelBody>

                    {/* Panel for Member 2 */}
                    <PanelBody title="Member 2 Settings" initialOpen={false}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ member2Image: media.url })}
                            allowedTypes={['image']}
                            value={member2Image}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {!member2Image ? 'Upload Member 2 Image' : 'Change Member 2 Image'}
                                </Button>
                            )}
                        />
                        {member2Image && <img src={member2Image} alt="Member 2" className="w-full mt-2 rounded-full" />}
                        <TextControl
                            label="Email URL"
                            value={member2Email}
                            onChange={(value) => setAttributes({ member2Email: value })}
                            placeholder="Enter email URL"
                        />
                        <TextControl
                            label="LinkedIn URL"
                            value={member2LinkedIn}
                            onChange={(value) => setAttributes({ member2LinkedIn: value })}
                            placeholder="Enter LinkedIn URL"
                        />
                    </PanelBody>

                    {/* Panel for Member 3 */}
                    <PanelBody title="Member 3 Settings" initialOpen={false}>
                        <MediaUpload
                            onSelect={(media) => setAttributes({ member3Image: media.url })}
                            allowedTypes={['image']}
                            value={member3Image}
                            render={({ open }) => (
                                <Button onClick={open} isPrimary>
                                    {!member3Image ? 'Upload Member 3 Image' : 'Change Member 3 Image'}
                                </Button>
                            )}
                        />
                        {member3Image && <img src={member3Image} alt="Member 3" className="w-full mt-2 rounded-full" />}
                        <TextControl
                            label="Email URL"
                            value={member3Email}
                            onChange={(value) => setAttributes({ member3Email: value })}
                            placeholder="Enter email URL"
                        />
                        <TextControl
                            label="LinkedIn URL"
                            value={member3LinkedIn}
                            onChange={(value) => setAttributes({ member3LinkedIn: value })}
                            placeholder="Enter LinkedIn URL"
                        />
                    </PanelBody>
                </InspectorControls>

                <div className="team-section bg-[#F5F5F5] p-14 container" id="our-team">
                    <div className="container mx-auto">
                        <RichText
                            tagName="h2"
                            value={sectionTitle}
                            onChange={(value) => setAttributes({ sectionTitle: value })}
                            className="font-bold text-4xl mb-12"
                            placeholder="Enter section title"
                        />

                        <div className="space-y-12">
                            {teamMembers.map((member, index) => (
                                <div
                                    className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-14 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                    key={index}
                                >
                                    {/* Image and Socials */}
                                    <div className="flex flex-col items-center space-y-4 flex-1">
                                        <img
                                            src={
                                                index === 0 ? member1Image :
                                                index === 1 ? member2Image : member3Image
                                            }
                                            alt={`Member ${index + 1}`}
                                            className="w-60 h-60 object-cover rounded-full mb-4 mx-auto"
                                        />
                                        <div className="flex space-x-4">
                                            <a
                                                href={
                                                    index === 0 ? member1Email :
                                                    index === 1 ? member2Email : member3Email
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
                                            >
                                                <img src={`${peopleStudioData.templateUrl}/assets/png/icon-email.png`} alt="Email Icon" className="w-6 h-6" />
                                            </a>

                                            <a
                                                href={
                                                    index === 0 ? member1LinkedIn :
                                                    index === 1 ? member2LinkedIn : member3LinkedIn
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
                                            >
                                                <img src={`${peopleStudioData.templateUrl}/assets/png/icon-linkedin.png`} alt="LinkedIn Icon" className="w-6 h-6" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Name and Description */}
                                    <div className="text-left md:text-left text-center flex-1">
                                        <RichText
                                            tagName="h3"
                                            value={member.name}
                                            onChange={(value) => updateMember(index, 'name', value)}
                                            className="font-bold text-xl mb-2"
                                            placeholder="Member Name"
                                        />
                                        <RichText
                                            tagName="p"
                                            value={member.description}
                                            onChange={(value) => updateMember(index, 'description', value)}
                                            className="text-base leading-relaxed"
                                            placeholder="Enter description"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    },
    save({ attributes }) {
        const { sectionTitle, teamMembers, member1Image, member2Image, member3Image, member1Email, member2Email, member3Email, member1LinkedIn, member2LinkedIn, member3LinkedIn } = attributes;

        return (
            <div className="team-section bg-[#F5F5F5] p-14" id="our-team">
                <div className="container mx-auto">
                    <h2 className="font-bold text-4xl mb-12">{sectionTitle}</h2>

                    <div className="space-y-12">
                        {teamMembers.map((member, index) => (
                            <div
                                className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-14 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                key={index}
                            >
                                {/* Image and Socials */}
                                <div className="flex flex-col items-center space-y-4 flex-1">
                                    <img
                                        src={
                                            index === 0 ? member1Image :
                                            index === 1 ? member2Image : member3Image
                                        }
                                        alt={`Member ${index + 1}`}
                                        className="w-60 h-60 object-cover rounded-full mb-4 mx-auto"
                                    />
                                    <div className="flex space-x-4">
                                        <a
                                            href={
                                                index === 0 ? member1Email :
                                                index === 1 ? member2Email : member3Email
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
                                        >
                                            <img src={`${peopleStudioData.templateUrl}/assets/png/icon-email.png`} alt="Email Icon" className="w-6 h-6" />
                                        </a>

                                        <a
                                            href={
                                                index === 0 ? member1LinkedIn :
                                                index === 1 ? member2LinkedIn : member3LinkedIn
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
                                        >
                                            <img src={`${peopleStudioData.templateUrl}/assets/png/icon-linkedin.png`} alt="LinkedIn Icon" className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                {/* Name and Description */}
                                <div className="text-left md:text-left text-center flex-1">
                                    <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                                    <RichText.Content
                                        tagName="p"
                                        value={member.description}
                                        className="text-base leading-relaxed"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    },
});
