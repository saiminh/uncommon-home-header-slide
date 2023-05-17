import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit( {attributes, setAttributes}) {
  const [ title, setTitle ] = useState( attributes.title );
  const [ subtitle, setSubtitle ] = useState( attributes.subtitle );
  const [ url, setUrl ] = useState( attributes.url );
  const [ pill, setPill ] = useState( attributes.pill );
  const blockProps = useBlockProps({
    className: `uncommon-home-header__slide`,
  });
	return (
		<div { ...blockProps }>
      <TextControl
          label="Title"
          value={ title }
          onChange={ ( value ) => {
            setTitle( value ) 
            setAttributes({title: value})
          }}
      />
      <TextControl
          label="URL"
          value={ url }
          onChange={ ( value ) => {
            setUrl( value );
            setAttributes({url: value})
          } }
      />
      <small className='label'>
        Image
      </small>
      <InnerBlocks 
        allowedBlocks={['core/image']}
        template={[['core/image']]}
      />
      <TextControl
          label="Subtitle/Short Description"
          value={ subtitle }
          onChange={ ( value ) => {
            setSubtitle( value );
            setAttributes({subtitle: value});  
          } }
      />
      <TextControl
          label="Pill"
          value={ pill }
          onChange={ ( value ) => {
            setPill( value );
            setAttributes({pill: value});
          } }
      />
		</div>
	);
}
