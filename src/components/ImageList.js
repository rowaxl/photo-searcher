import React from 'react';
import Image from './Image';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px", display: "grid" }}>
                {this.props.images.map(image => <Image source={image} key={image.id} />)}
            </div>
        );
    }
}

export default ImageList;