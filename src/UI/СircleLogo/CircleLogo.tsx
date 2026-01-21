import localFont from 'next/font/local'
import styles from "./circlelogo.module.scss";

const SpecialGothicExpandedOne = localFont({
  src: '../../fonts/SpecialGothicExpandedOne/SpecialGothicExpandedOne-Regular.ttf',
})

const CircleLogo = ({ text }: { text: string}) => {
    return (
        <svg className={styles.circle} viewBox="0 0 100 100">
            <path id="circle" d="M -6,0 A 30,30 0 0,1 108,75" />
            <text>
                <textPath className={SpecialGothicExpandedOne.className} xlinkHref="#circle">
                    {text}
                </textPath>
            </text>
        </svg>
    );
};

export default CircleLogo;