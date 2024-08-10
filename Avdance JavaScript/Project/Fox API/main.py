import aiohttp

headers = {'Content-type': 'application/json'}
async with aiohttp.ClientSession(headers=headers) as session:
    async with session.get('https://nekos.pro/api/nsfw-neko') as resp:
        image = await resp.json()
        print(image['url'])