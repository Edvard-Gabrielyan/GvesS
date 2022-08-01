import { all, call, put, takeEvery } from 'redux-saga/effects';
import Axios from '../../services/axios';
import { axiosData } from './requestGenerator';
import { commentRequest } from './action';
import { uploadFile } from '../../views/global/hooks/upload/helpers';

function* commentRequestData(payload) {
  console.log(payload, 'order payload');
  const { url } = axiosData.commentRequest;
  const {
    data: { data },
  } = yield call(Axios.request, {
    ...axiosData.commentRequest,
    url,
    data: uploadFile(payload),
  });
  return data;
}

function* watchCommentRequest() {
  yield takeEvery(commentRequest, function* workCommentRequest({ payload }) {
    try {
      const data = yield call(commentRequestData, payload);
      yield put(commentRequest.success({ data }));
    } catch (e) {
      yield put(commentRequest.error());
    }
  });
}

export default function* comment() {
  yield all([watchCommentRequest()]);
}
