export class AirlineSightingModel {
    constructor({ id, airlineName, airlineShortName, airlineCode, location, createdDate, photoUrl }) {
        this.id = id;
        this.airlineName = airlineName;
        this.airlineShortName = airlineShortName;
        this.airlineCode = airlineCode;
        this.location = location;
        this.createdDate = createdDate;
        this.photoUrl = photoUrl;
    }
}
