import React from 'react';
import Card from 'react-bootstrap/Card';
import './ActivityFeedDetail.css';

//Displaying the all call objects detail
const ActivityFeedDetail = (props) => {

  const {call_details} = props;

  let date = new Date(call_details.created_at);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  let am_pm = 'AM';

  if(hours==0){ 
    hours=12;
  }
  else if(hours>12)
  {
    hours=hours%12;
    am_pm='PM';
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Call Details</Card.Title><hr/>
        <Card.Text>
          <p>Call Id: {call_details.id}</p>
          <p>Call From: {call_details.from}</p>
          <p>Call Via: {call_details.via}</p>
          <p>Call To: {call_details.to}</p>
          <p>Call Direction: {call_details.direction}</p>
          <p>Call Duration: {call_details.duration}</p>
          <p>Call Type: {call_details.call_type}</p>
          <p>Call Time: {formattedHours}:{formattedMinutes} {am_pm}</p>
        </Card.Text>
        <button className='go-back-button'><a href="/">Go Back</a></button>
      </Card.Body>
    </Card>
  )
}

export default ActivityFeedDetail;