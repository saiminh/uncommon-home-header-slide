import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save({
      className: `swiper-slide`,
      'data-title': attributes.title,
      'data-url': attributes.url,
      'data-subtitle': attributes.subtitle,
      'data-pill': attributes.pill
    }) }>
      <div className='uncommon-home-header-slide '>
        <div className="uncommon-home-header-slide__image">
          <InnerBlocks.Content />
        </div>
        <div className='uncommon-home-header-slide__info'>
          <div className='uncommon-home-header-slide__desc'>{attributes.subtitle}</div>
          <div className='uncommon-home-header-slide__pill'>{attributes.pill}</div>
        </div>
      </div>
		</div>
	);
}
