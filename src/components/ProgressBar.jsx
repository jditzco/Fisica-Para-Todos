import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample({progress}) {
  const now = progress*10;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;