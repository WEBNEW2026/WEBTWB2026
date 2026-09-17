import urllib.request
import urllib.parse
import json

def translate(text, target_lang):
    url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + target_lang + "&dt=t&q=" + urllib.parse.quote(text)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        return "".join([x[0] for x in data[0]])
    except Exception as e:
        return f"Error: {e}"

print(translate("Hello world", "fr"))
print(translate("Hello world", "ja"))
print(translate("Hello world", "ko"))
