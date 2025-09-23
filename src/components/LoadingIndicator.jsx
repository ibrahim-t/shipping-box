import Spinner from 'react-bootstrap/Spinner';

function LoadingIndicator() {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}> 
      <Spinner animation="border" />
    </div>
}

export default LoadingIndicator;