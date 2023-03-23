import { ref, onMounted, onUnmounted } from "vue";
import { useEventlistener } from "./Event";

// 관례상 컴포저블 함수 이름은 use 로 시작한다.
export function useMouse() {
  // 컴포저블로 캡슐화된 내부에서 관리되는 상태
  const x = ref(0);
  const y = ref(0);

  useEventlistener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  // 컴포저블은 시간이 지남에 따라 관리되는 상태를 업데이트 할 수 있다.
  /*function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }*/

  // 컴포저블은 컴포넌트의 생명주기에 연결되어 사이드이펙트를 설정 및 해제할 수 있다.
  /*onMounted(() => window.addEventListener("mousemove", update));

  onUnmounted(() => window.removeEventListener("mousemove", update));*/

  // 관리 상태를 반환 값을 노출시킨다.
  return { x, y };
}
