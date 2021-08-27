export default async function getData() {
    const result = await fetch(
        'data.json',
        {
            headers:
                { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        }
    );
    return result.json();
}