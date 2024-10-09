/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/hero-block.js":
/*!**********************************!*\
  !*** ./src/blocks/hero-block.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('people-studio/hero', {
  title: 'Hero Block',
  icon: 'smiley',
  category: 'layout',
  attributes: {
    bgImageMobile: {
      type: 'string',
      default: null
    },
    bgImageDesktop: {
      type: 'string',
      default: null
    },
    contentImage: {
      type: 'string',
      default: null
    },
    bgColor: {
      type: 'string',
      default: '#ffffff' // Default color in hex
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const {
      bgImageMobile,
      bgImageDesktop,
      contentImage,
      bgColor
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Background Image (Mobile)",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        bgImageMobile: media.url
      }),
      allowedTypes: ['image'],
      value: bgImageMobile,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isDefault: true,
        isPrimary: true
      }, !bgImageMobile ? 'Select Mobile Background Image' : 'Change Mobile Background Image')
    }), bgImageMobile && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: bgImageMobile,
      alt: "Mobile Background",
      className: "w-full mt-2"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Background Image (Desktop)",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        bgImageDesktop: media.url
      }),
      allowedTypes: ['image'],
      value: bgImageDesktop,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isDefault: true,
        isPrimary: true
      }, !bgImageDesktop ? 'Select Desktop Background Image' : 'Change Desktop Background Image')
    }), bgImageDesktop && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: bgImageDesktop,
      alt: "Desktop Background",
      className: "w-full mt-2"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Content Image",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Content Image")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        contentImage: media.url
      }),
      allowedTypes: ['image'],
      value: contentImage,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isDefault: true,
        isPrimary: true
      }, !contentImage ? 'Select Content Image' : 'Change Content Image')
    }), contentImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: contentImage,
      alt: "Content",
      className: "w-full mt-2"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Background Color for Middle Section",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Background Color")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
      value: bgColor,
      onChange: color => setAttributes({
        bgColor: color
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative hero-block w-full h-[70vh]"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
      className: "md:absolute inset-0 w-full h-full object-cover"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width: 768px)",
      srcSet: bgImageDesktop
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: bgImageMobile,
      alt: "Background",
      className: "w-full h-full object-cover"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute bottom-0 md:inset-0 flex justify-center items-center w-full"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `hero-content w-full md:max-w-[430px] md:max-h-[120px] px-4`,
      style: {
        backgroundColor: bgColor
      }
    }, contentImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: contentImage,
      alt: "Hero Content",
      className: "md:max-w-[60%] h-auto mx-auto"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      jsx: true
    }, `
                        @media (min-width: 768px) {
                            .hero-content {
                                background-color: ${bgColor} !important;
                                opacity: 0.8;  // Color con opacidad solo en desktop
                            }
                        }
                    `)));
  },
  save({
    attributes
  }) {
    const {
      bgImageMobile,
      bgImageDesktop,
      contentImage,
      bgColor
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative hero-block w-full h-[70vh]"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("picture", {
      className: "md:absolute inset-0 w-full h-full object-cover"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
      media: "(min-width: 768px)",
      srcSet: bgImageDesktop
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: bgImageMobile,
      alt: "Background",
      className: "w-full h-full object-cover"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute bottom-0 md:inset-0 flex justify-center items-center w-full"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `hero-content w-full md:max-w-[430px] md:max-h-[120px] px-4`,
      style: {
        backgroundColor: bgColor
      }
    }, contentImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: contentImage,
      alt: "Hero Content",
      className: "md:max-w-[60%] h-auto mx-auto"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      jsx: true
    }, `
                    @media (min-width: 768px) {
                        .hero-content {
                            background-color: ${bgColor} !important;
                            opacity: 0.8;  // Color con opacidad solo en desktop
                        }
                    }
                `));
  }
});

/***/ }),

/***/ "./src/blocks/image-and-text.js":
/*!**************************************!*\
  !*** ./src/blocks/image-and-text.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('people-studio/image-text-block', {
  title: 'Image and Text Block',
  icon: 'format-image',
  category: 'layout',
  attributes: {
    sectionTitle: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: 'Section Title'
    },
    rows: {
      type: 'array',
      default: []
    },
    imageSize: {
      type: 'number',
      default: 100 // Tamaño inicial de la imagen (100% del contenedor)
    },
    buttonText: {
      type: 'string',
      source: 'html',
      selector: 'a',
      default: 'View Services' // Texto del botón
    },
    buttonColor: {
      type: 'string',
      default: '#1C3D5A' // Color del botón
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const {
      sectionTitle,
      rows,
      imageSize,
      buttonText,
      buttonColor
    } = attributes;
    const addRow = () => {
      const newRows = [...rows, {
        image: null,
        text: ''
      }];
      setAttributes({
        rows: newRows
      });
    };
    const updateRow = (index, field, value) => {
      const updatedRows = [...rows];
      updatedRows[index][field] = value;
      setAttributes({
        rows: updatedRows
      });
    };
    const removeRow = index => {
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setAttributes({
        rows: updatedRows
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Section Settings",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      value: sectionTitle,
      onChange: value => setAttributes({
        sectionTitle: value
      }),
      placeholder: "Enter section title"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Image Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: "Image Size",
      value: imageSize,
      onChange: value => setAttributes({
        imageSize: value
      }),
      min: 50,
      max: 100,
      step: 1
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-[#F5F5F5] py-14",
      id: "what-we-do"
    }, rows.map((row, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} mb-8 p-4 gap-4`,
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => updateRow(index, 'image', media.url),
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isPrimary: true
      }, row.image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: row.image,
        alt: `Row image ${index + 1}`,
        className: "max-w-full h-auto",
        style: {
          maxWidth: `${imageSize}%`,
          height: 'auto'
        }
      }) : 'Upload Image')
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full md:w-1/2 flex flex-col justify-center p-8"
    }, index === 0 && sectionTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: sectionTitle,
      className: "font-inter font-semibold text-4xl mb-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "p",
      value: row.text,
      onChange: value => updateRow(index, 'text', value),
      placeholder: "Enter text here",
      className: "text-lg leading-relaxed text-left",
      allowedFormats: ['core/bold']
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isDestructive: true,
      onClick: () => removeRow(index),
      className: "mt-4"
    }, "Remove Row"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      isPrimary: true,
      onClick: addRow
    }, "Add New Row"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center mt-8"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "font-lato font-light text-base text-[#1C3D5A] border border-[#1C3D5A] rounded-lg py-2 px-6 inline-block transition-transform duration-300 ease-in-out transform hover:bg-[#1C3D5A] hover:text-white hover:scale-105"
    }, buttonText))));
  },
  save({
    attributes
  }) {
    const {
      sectionTitle,
      rows,
      imageSize,
      buttonText,
      buttonColor
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-[#F5F5F5] py-14",
      id: "what-we-do"
    }, rows.map((row, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} mb-8 gap-4`,
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full md:w-1/2 mb-4 md:mb-0 flex justify-center items-center"
    }, row.image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: row.image,
      alt: `Row image ${index + 1}`,
      className: "max-w-full h-auto",
      style: {
        maxWidth: `${imageSize}%`,
        height: 'auto'
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full md:w-1/2 flex flex-col justify-center p-8"
    }, index === 0 && sectionTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: sectionTitle,
      className: "font-inter font-semibold text-4xl mb-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: row.text,
      className: "text-lg leading-relaxed text-left"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center mt-8 scroll-link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#our-services",
      className: "font-lato font-light text-base text-[#1C3D5A] border border-[#1C3D5A] rounded-lg py-2 px-6 inline-block transition-transform duration-300 ease-in-out transform hover:bg-[#1C3D5A] hover:text-white hover:scale-105"
    }, buttonText)));
  }
});

/***/ }),

/***/ "./src/blocks/our-services.js":
/*!************************************!*\
  !*** ./src/blocks/our-services.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('people-studio/our-services', {
  title: 'Our Services',
  icon: 'admin-tools',
  category: 'layout',
  attributes: {
    sectionTitle: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: 'Our Services'
    },
    services: {
      type: 'array',
      source: 'query',
      selector: '.service-card',
      default: [{
        image: null,
        title: 'Service 1',
        subtitle: 'Subtitle 1',
        text: 'Description for service 1'
      }, {
        image: null,
        title: 'Service 2',
        subtitle: 'Subtitle 2',
        text: 'Description for service 2'
      }, {
        image: null,
        title: 'Service 3',
        subtitle: 'Subtitle 3',
        text: 'Description for service 3'
      }],
      query: {
        image: {
          type: 'string',
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        title: {
          type: 'string',
          source: 'html',
          selector: 'h3'
        },
        subtitle: {
          type: 'string',
          source: 'html',
          selector: 'h4'
        },
        text: {
          type: 'string',
          source: 'html',
          selector: 'p'
        }
      }
    },
    service1Image: {
      type: 'string',
      default: null
    },
    service2Image: {
      type: 'string',
      default: null
    },
    service3Image: {
      type: 'string',
      default: null
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const {
      sectionTitle,
      services,
      service1Image,
      service2Image,
      service3Image
    } = attributes;
    const updateService = (index, field, value) => {
      const updatedServices = [...services];
      updatedServices[index] = {
        ...updatedServices[index],
        [field]: value
      };
      setAttributes({
        services: updatedServices
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Section Settings",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      value: sectionTitle,
      onChange: value => setAttributes({
        sectionTitle: value
      }),
      placeholder: "Enter section title"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Service 1 Image",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        service1Image: media.url
      }),
      allowedTypes: ['image'],
      value: service1Image,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isPrimary: true
      }, !service1Image ? 'Upload Service 1 Image' : 'Change Service 1 Image')
    }), service1Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: service1Image,
      alt: "Service 1",
      className: "w-full mt-2"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Service 2 Image",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        service2Image: media.url
      }),
      allowedTypes: ['image'],
      value: service2Image,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isPrimary: true
      }, !service2Image ? 'Upload Service 2 Image' : 'Change Service 2 Image')
    }), service2Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: service2Image,
      alt: "Service 2",
      className: "w-full mt-2"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Service 3 Image",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        service3Image: media.url
      }),
      allowedTypes: ['image'],
      value: service3Image,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isPrimary: true
      }, !service3Image ? 'Upload Service 3 Image' : 'Change Service 3 Image')
    }), service3Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: service3Image,
      alt: "Service 3",
      className: "w-full mt-2"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "our-services p-14",
      id: "our-services"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      value: sectionTitle,
      onChange: value => setAttributes({
        sectionTitle: value
      }),
      className: "font-bold text-4xl mb-8",
      placeholder: "Enter section title"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "service-navigation md:hidden flex justify-center space-x-4 mb-8"
    }, services.map((service, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: index,
      onClick: () => {
        const serviceElement = document.getElementById(`service-${index + 1}`);
        if (serviceElement) {
          serviceElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      },
      className: "text-xs font-medium px-4 py-2 border-1 border-[#1C3145] text-[#1C3145] rounded hover:bg-[#1C3145] hover:text-white transition"
    }, service.title))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-8"
    }, services.map((service, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "service-card bg-gray-100 rounded-lg shadow-lg",
      key: index,
      id: `service-${index + 1}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mb-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: index === 0 ? service1Image : index === 1 ? service2Image : service3Image,
      alt: `Service ${index + 1}`,
      className: "w-full h-auto mb-4 mx-auto"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "p-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h3",
      value: service.title,
      onChange: value => updateService(index, 'title', value),
      className: "font-bold text-xl mb-2 text-[#1C3145]",
      placeholder: "Service Title"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h4",
      value: service.subtitle,
      onChange: value => updateService(index, 'subtitle', value),
      className: "font-bold text-lg mb-2",
      placeholder: "Service Subtitle"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "p",
      value: service.text,
      onChange: value => updateService(index, 'text', value),
      placeholder: "Service Description",
      allowedFormats: ['core/bold'],
      className: "text-base"
    })))))));
  },
  save({
    attributes
  }) {
    const {
      sectionTitle,
      services,
      service1Image,
      service2Image,
      service3Image
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "our-services p-14",
      id: "our-services"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "font-bold text-4xl mb-8"
    }, sectionTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "service-navigation md:hidden flex justify-center space-x-4 mb-8"
    }, services.map((service, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      key: index,
      onClick: () => {
        const serviceElement = document.getElementById(`service-${index + 1}`);
        if (serviceElement) {
          serviceElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      },
      className: "text-xs font-medium px-4 py-2 border-1 border-[#1C3145] text-[#1C3145] rounded hover:bg-[#1C3145] hover:text-white transition"
    }, service.title))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-8"
    }, services.map((service, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "service-card bg-gray-100 rounded-lg shadow-lg",
      key: index,
      id: `service-${index + 1}`
    }, index === 0 && service1Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: service1Image,
      alt: "Service 1",
      className: "w-full h-auto mb-4"
    }), index === 1 && service2Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: service2Image,
      alt: "Service 2",
      className: "w-full h-auto mb-4"
    }), index === 2 && service3Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: service3Image,
      alt: "Service 3",
      className: "w-full h-auto mb-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "p-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "font-bold text-xl mb-2 text-[#1C3145]"
    }, service.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
      className: "font-bold text-lg mb-2"
    }, service.subtitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: service.text,
      className: "text-base"
    }))))));
  }
});

/***/ }),

/***/ "./src/blocks/team.js":
/*!****************************!*\
  !*** ./src/blocks/team.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('people-studio/team-section', {
  title: 'Team Section',
  icon: 'groups',
  category: 'layout',
  attributes: {
    sectionTitle: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: 'Meet Our Team'
    },
    teamMembers: {
      type: 'array',
      default: [{
        name: 'Person 1',
        description: 'Description for Person 1'
      }, {
        name: 'Person 2',
        description: 'Description for Person 2'
      }, {
        name: 'Person 3',
        description: 'Description for Person 3'
      }]
    },
    member1Image: {
      type: 'string',
      default: null
    },
    member2Image: {
      type: 'string',
      default: null
    },
    member3Image: {
      type: 'string',
      default: null
    },
    member1Email: {
      type: 'string',
      default: '#'
    },
    member2Email: {
      type: 'string',
      default: '#'
    },
    member3Email: {
      type: 'string',
      default: '#'
    },
    member1LinkedIn: {
      type: 'string',
      default: '#'
    },
    member2LinkedIn: {
      type: 'string',
      default: '#'
    },
    member3LinkedIn: {
      type: 'string',
      default: '#'
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const {
      sectionTitle,
      teamMembers,
      member1Image,
      member2Image,
      member3Image,
      member1Email,
      member2Email,
      member3Email,
      member1LinkedIn,
      member2LinkedIn,
      member3LinkedIn
    } = attributes;
    const updateMember = (index, field, value) => {
      const updatedMembers = [...teamMembers];
      updatedMembers[index] = {
        ...updatedMembers[index],
        [field]: value
      };
      setAttributes({
        teamMembers: updatedMembers
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Section Title",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      value: sectionTitle,
      onChange: value => setAttributes({
        sectionTitle: value
      }),
      placeholder: "Enter section title"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Member 1 Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        member1Image: media.url
      }),
      allowedTypes: ['image'],
      value: member1Image,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isPrimary: true
      }, !member1Image ? 'Upload Member 1 Image' : 'Change Member 1 Image')
    }), member1Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: member1Image,
      alt: "Member 1",
      className: "w-full mt-2 rounded-full"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Email URL",
      value: member1Email,
      onChange: value => setAttributes({
        member1Email: value
      }),
      placeholder: "Enter email URL"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "LinkedIn URL",
      value: member1LinkedIn,
      onChange: value => setAttributes({
        member1LinkedIn: value
      }),
      placeholder: "Enter LinkedIn URL"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Member 2 Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        member2Image: media.url
      }),
      allowedTypes: ['image'],
      value: member2Image,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isPrimary: true
      }, !member2Image ? 'Upload Member 2 Image' : 'Change Member 2 Image')
    }), member2Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: member2Image,
      alt: "Member 2",
      className: "w-full mt-2 rounded-full"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Email URL",
      value: member2Email,
      onChange: value => setAttributes({
        member2Email: value
      }),
      placeholder: "Enter email URL"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "LinkedIn URL",
      value: member2LinkedIn,
      onChange: value => setAttributes({
        member2LinkedIn: value
      }),
      placeholder: "Enter LinkedIn URL"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Member 3 Settings",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: media => setAttributes({
        member3Image: media.url
      }),
      allowedTypes: ['image'],
      value: member3Image,
      render: ({
        open
      }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        isPrimary: true
      }, !member3Image ? 'Upload Member 3 Image' : 'Change Member 3 Image')
    }), member3Image && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: member3Image,
      alt: "Member 3",
      className: "w-full mt-2 rounded-full"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Email URL",
      value: member3Email,
      onChange: value => setAttributes({
        member3Email: value
      }),
      placeholder: "Enter email URL"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "LinkedIn URL",
      value: member3LinkedIn,
      onChange: value => setAttributes({
        member3LinkedIn: value
      }),
      placeholder: "Enter LinkedIn URL"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-section bg-[#F5F5F5] p-14 container",
      id: "our-team"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container mx-auto"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      value: sectionTitle,
      onChange: value => setAttributes({
        sectionTitle: value
      }),
      className: "font-bold text-4xl mb-12",
      placeholder: "Enter section title"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-12"
    }, teamMembers.map((member, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-14 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`,
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-col items-center space-y-4 flex-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: index === 0 ? member1Image : index === 1 ? member2Image : member3Image,
      alt: `Member ${index + 1}`,
      className: "w-60 h-60 object-cover rounded-full mb-4 mx-auto"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex space-x-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: index === 0 ? member1Email : index === 1 ? member2Email : member3Email,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${peopleStudioData.templateUrl}/assets/png/icon-email.png`,
      alt: "Email Icon",
      className: "w-6 h-6"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: index === 0 ? member1LinkedIn : index === 1 ? member2LinkedIn : member3LinkedIn,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${peopleStudioData.templateUrl}/assets/png/icon-linkedin.png`,
      alt: "LinkedIn Icon",
      className: "w-6 h-6"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-left md:text-left text-center flex-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h3",
      value: member.name,
      onChange: value => updateMember(index, 'name', value),
      className: "font-bold text-xl mb-2",
      placeholder: "Member Name"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "p",
      value: member.description,
      onChange: value => updateMember(index, 'description', value),
      className: "text-base leading-relaxed",
      placeholder: "Enter description"
    }))))))));
  },
  save({
    attributes
  }) {
    const {
      sectionTitle,
      teamMembers,
      member1Image,
      member2Image,
      member3Image,
      member1Email,
      member2Email,
      member3Email,
      member1LinkedIn,
      member2LinkedIn,
      member3LinkedIn
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "team-section bg-[#F5F5F5] p-14",
      id: "our-team"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container mx-auto"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "font-bold text-4xl mb-12"
    }, sectionTitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-12"
    }, teamMembers.map((member, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-14 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`,
      key: index
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex flex-col items-center space-y-4 flex-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: index === 0 ? member1Image : index === 1 ? member2Image : member3Image,
      alt: `Member ${index + 1}`,
      className: "w-60 h-60 object-cover rounded-full mb-4 mx-auto"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex space-x-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: index === 0 ? member1Email : index === 1 ? member2Email : member3Email,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${peopleStudioData.templateUrl}/assets/png/icon-email.png`,
      alt: "Email Icon",
      className: "w-6 h-6"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: index === 0 ? member1LinkedIn : index === 1 ? member2LinkedIn : member3LinkedIn,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "bg-[#1C3145] text-white w-12 h-12 flex justify-center items-center rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: `${peopleStudioData.templateUrl}/assets/png/icon-linkedin.png`,
      alt: "LinkedIn Icon",
      className: "w-6 h-6"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-left md:text-left text-center flex-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "font-bold text-xl mb-2"
    }, member.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: member.description,
      className: "text-base leading-relaxed"
    })))))));
  }
});

/***/ }),

/***/ "./src/blocks/text-and-cta.js":
/*!************************************!*\
  !*** ./src/blocks/text-and-cta.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('people-studio/cta-block', {
  title: 'CTA Block',
  icon: 'button',
  category: 'layout',
  attributes: {
    text: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: 'Hero Sub Text'
    },
    buttonText: {
      type: 'string',
      default: 'Learn More'
    }
  },
  edit({
    attributes,
    setAttributes
  }) {
    const {
      text,
      buttonText
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-white text-center p-14"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      value: text,
      onChange: value => setAttributes({
        text: value
      }),
      className: "font-inter font-semibold text-xl text-[#1C3D5A] mb-4",
      placeholder: "Add your text here",
      allowedFormats: ['core/bold', 'core/italic', 'core/line']
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center mt-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: buttonText,
      onChange: e => setAttributes({
        buttonText: e.target.value
      }),
      className: "text-lg border rounded-lg p-2 text-center",
      placeholder: "Button Text"
    }))));
  },
  save({
    attributes
  }) {
    const {
      text,
      buttonText
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-white text-center p-14"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: text,
      className: "font-inter font-semibold text-xl text-[#1C3D5A] mb-4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "scroll-link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#what-we-do",
      className: "font-lato font-light text-base text-[#1C3D5A] border border-[#1C3D5A] rounded-lg py-2 px-6 inline-block transition-transform duration-300 ease-in-out transform hover:bg-[#1C3D5A] hover:text-white hover:scale-105"
    }, buttonText)));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_hero_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/hero-block */ "./src/blocks/hero-block.js");
/* harmony import */ var _blocks_text_and_cta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/text-and-cta */ "./src/blocks/text-and-cta.js");
/* harmony import */ var _blocks_image_and_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/image-and-text */ "./src/blocks/image-and-text.js");
/* harmony import */ var _blocks_our_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/our-services */ "./src/blocks/our-services.js");
/* harmony import */ var _blocks_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/team */ "./src/blocks/team.js");





})();

/******/ })()
;
//# sourceMappingURL=index.js.map