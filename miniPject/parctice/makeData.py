import requests
import json

base_url = "https://openapi.foodsafetykorea.go.kr/api/fd04dde2eddf4489b7d7/I2790/json"

# 전체 데이터를 저장할 리스트
all_data = []

# 전체 데이터 건수
total_count = 12790
items_per_page = 999 

# 페이지별로 데이터 요청 (첫번째부터 마지막 자료까지, 999개 만큼)
for start_num in range(1, total_count, items_per_page):
    end_num = start_num + items_per_page - 1 # 999개보다 1개 적어야 999개 가져오기 때문
    if end_num > total_count:
        end_num = total_count # (초과요청 방지) : 총 자료건수를 넘으면 이상의 자료를 탐색하지 않도록 자료건수와 동일하게 맞춰줌
    url = f"{base_url}/{start_num}/{end_num}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        if "row" in data["I2790"]:
            items = data["I2790"]["row"]
            all_data.extend(items) # 가져온 데이터를 리스트에 추가
        else:
            print(f'No data found for page starting at {start_num}')
    else:
        print(f'Failed to fetch data for page {start_num}: {response.status_code}')
        break # 실패시 루프 중단

# 전체 데이터를 파일로 저장
with open('./data.json', 'w', encoding='utf-8') as f: # 인코딩을 하지않으면 한글이 깨진다. 특히 방대한 양의 데이터를 저장할 때.
    json.dump(all_data, f, ensure_ascii=False, indent=4)

print('json 저장 성공')    