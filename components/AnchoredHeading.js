import React from 'react';

function titleToSlug(title) {
  return title.toLowerCase()
  .replace(/[^\w ]+/g,'')
  .replace(/ +/g,'-');
}

function AnchoredHeading(props) {
  const Tag = `h${props.level}`;
  return <Tag>
    <a name={titleToSlug(props.content)} className="anchor" href={`#${titleToSlug(props.content)}`} rel="nofollow" aria-hidden="true" title={props.content} tabIndex="-1"></a>
    {props.content}
  </Tag>;
}

export default AnchoredHeading;