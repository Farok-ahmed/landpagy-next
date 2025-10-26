import Image from "next/image";
import auhorImg from "@/assets/images/blog/auhor-img.png";
;

export default function CommentCard() {
  return (
    <div className="single-post-author mb-60">
      <div className="author-img">
        <Image src={auhorImg} alt="" />
      </div>
      <div className="author-body">
        <h5 className="auth-name">Ahmad Bator</h5>
        <p className="auth-text">
          Loo tomfoolery jolly good bloke chancer chimney pot nice one of the,
          he is nicked it mufty Oxford say wind up bits and bobs cheeky bugger,
          amongst cack bugger Eaton William skive off.!
        </p>
      </div>
    </div>
  );
}
