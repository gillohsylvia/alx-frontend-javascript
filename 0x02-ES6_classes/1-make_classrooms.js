import ClassRoom from './0-classroom';

export default function initializeRooms() {
        const maxsize = [19, 20, 34];
        const array = [];
        for (const size of maxsize) {
                array.push(new ClassRoom(size));
        }

        return array;
}
