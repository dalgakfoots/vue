import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  function doFetch() {
    // 상태 재설정
    data.value = null;
    error.value = null;

    // unref() 은 ref 의 래핑을 해제한다.
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (this.error = err));
  }

  if (isRef(url)) {
    // 설정하기 : 입력 url 이 ref 인 경우 반응적 다시 가져오기
    watchEffect(doFetch);
  } else {
    // 그렇지 않으면 한번만 가져와서
    // 감시자의 오버헤드를 피한다.
    doFetch();
  }

  return { data, error };
}
