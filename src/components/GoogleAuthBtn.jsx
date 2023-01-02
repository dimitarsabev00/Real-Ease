import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../configs/firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const GoogleAuthBtn = () => {
  const navigate = useNavigate();
  const onGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // check for the user

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          fullName: user.displayName,
          email: user.email,
          createdAt: serverTimestamp(),
          uid: user.uid,
        });
      }
      toast.success("Continue with Google was successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Could not authorize with Google");
    }
  };
  return (
    <button
      type="button"
      onClick={onGoogleAuth}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
    >
      <FcGoogle className="text-2xl  bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
};
export default GoogleAuthBtn;
