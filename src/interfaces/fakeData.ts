export default interface fakeData {
    id: number,
    title: string,
    mainImageUrl: string,
    secondaryImageUrl: string,
    description: string,
    price: number,
    iconUrl: string,
    screens: {
        id: number,
        imageUrl: string,
        description: string
    }[]
};