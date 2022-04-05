import {
    computed,
    ref
} from "vue";

export default function homeSwitch() {
    const indexRef = ref(0);
    const boxRef = ref(null);
    const isWheelRef = ref(false);

    const marginRef = computed(() => {
        const boxRefHeight = boxRef.value ? boxRef.value.offsetHeight / 3 : 0;
        const indexRefValue = indexRef ? indexRef.value : 0;
        return -boxRefHeight * indexRefValue;
    });
    const handleClick = (i) => {
        indexRef.value = i;
    };
    const handleWheel = (e) => {
        if (isWheelRef.value) {
            return;
        }
        if (e.wheelDelta < 0) {
            if (indexRef.value >= 2) {
                return;
            }
            indexRef.value++;
            isWheelRef.value = true;
        } else if (e.wheelDelta > 0) {
            if (indexRef.value <= 0) {
                return;
            }
            indexRef.value--;
            isWheelRef.value = true;
        }
    };
    const handleEnd = () => {
        isWheelRef.value = false;
    };

    return {
        indexRef,
        boxRef,
        isWheelRef,
        marginRef,
        handleClick,
        handleWheel,
        handleEnd,
    }
}