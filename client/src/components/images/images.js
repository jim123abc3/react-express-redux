import React from 'react';
import './images.css';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getImages} from '../../store/actions/images'

class Images extends React.Component {

    static propTypes = {
        getImages: PropTypes.func.isRequired,
        images: PropTypes.array.isRequired
      }
    
    static defaultProps = {
        images: []
    }
  
    componentDidMount(){ 
        this.props.getImages();
    }

    render() { 
        return (  
            <div>
                <h2>Images From AWS S3</h2>
                <button onClick={this.props.getImages} >Reload Images</button>
                <ul>
                    {this.props.images.map(image =>  
                        <li key={Math.random()}>
                         <img src={image} alt='awsImages'/> 
                        </li>
                    )}
                </ul>
            </div>
          );
    }
}

const mapStateToProps = (state) => ({
    images: state.images
})

const dispatchToProps = (dispatch) => ({
    getImages: () => dispatch(getImages())
})

export default connect(mapStateToProps, dispatchToProps)(Images);
