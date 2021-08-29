import fakeData from "./interfaces/fakeData"

export default async function getData(): Promise<fakeData[]> {
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + "//" + getUrl.host;
    const result = await fetch(
        `${baseUrl}/data.json`,
        {
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        }
    );
    return result.json();
}