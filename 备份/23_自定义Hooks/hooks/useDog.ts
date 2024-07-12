import { reactive, onMounted } from "vue";
import axios from "axios";

export default function () {
  let dogList = reactive([
    "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
  ]);

  async function getDog() {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      dogList.push(data.message);
    } catch (err) {
      console.log(err.message);
    }
  }

  onMounted(() => {
    getDog();
  });
  // 向外部提供东西
  return {
    dogList,
    getDog,
  };
}
