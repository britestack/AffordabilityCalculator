import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export const options = {
  stages: [
    { duration: '60s', target: 100 }, //below normal
    { duration: '20s', target: 400 },
    { duration: '1m', target: 600 },  //normal load
    { duration: '2m', target: 1200 }, //approaching breaking point?
    { duration: '2m', target: 1500 },
    { duration: '1m', target: 1500 }, // should explode here..
    { duration: '40s', target: 1400 },
    { duration: '40s', target: 1300 },
    { duration: '40s', target: 500 },  //down scale and recover
    { duration: '20s', target: 100 },
  ],
};

export const errorRate = new Rate('errors');

export default function () {
  const BASE_URL = 'http://localhost:3003';
  const mortgageid = Math.floor(Math.random() * 10000000) + 1;
  const listingid = Math.floor(Math.random() * 10000000) + 1;
  const responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/${listingid}/mortages/${mortgageid}`,
      null,
      { tags: { name: 'getHomesURL' } },
    ],
  ]);
   check(http.get(BASE_URL), {
     'status is 200': (r) => r.status == 200,
   }) || errorRate.add(1);
  sleep(1);
}
