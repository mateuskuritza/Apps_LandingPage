import fakeData from "./interfaces/fakeData"

export default async function getData(): Promise<fakeData[]> {
    const result = await fetch(
        'data.json',
        {
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        }
    );
    return result.json();
}