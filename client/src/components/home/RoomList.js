import React from 'react';
import Room from './Room';
const RoomList = ({rooms}) => {
    return (
        <div>
            {rooms && rooms.map(room => (<Room key={rooms._id} name={room.name}></Room>))}
        </div>
    )
}

export default RoomList
