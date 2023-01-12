import api from '/utils/server/api';
import decode from '/utils/server/decode';

export default async function sessionApi(req, res) {
  await api(req, res, {
    get: () => decode(req.headers.authorization),
  });
}
