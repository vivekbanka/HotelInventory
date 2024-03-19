export interface rooms {
    roomsAvailable: number;
    bookedRooms: number;
    toalRooms: number
}

export interface roomslist {
    roomType: string;
    checkInTime: Date;
    checkOutTime: Date;
    amenities: string;
    photos: string;
    price : number
}