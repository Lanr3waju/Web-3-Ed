import discord from "../../images/discord-logo-png-7617.png";

function CommunitySection() {
  return (
    <section className="text-center py-40 px-4">
      <p className="text-xl font-barlow font-bold text-green-600 tracking-wider">
        community
      </p>
      <h2 className="text-4xl mt-4 font-bold tracking-wide leading-relaxed">
        Connect with other builders
      </h2>
      <p className="text-lg py-4 font-semibold">
        Meet thousands of developers and gamers at all different stages of their
        web3 journey.
      </p>
      <button
        className="mt-8 bg-black shadow-md rounded-xl justify-center items-center mr-auto ml-auto font-semibold  w-4/6 h-16 shadow-green-900 text-white text-lg flex"
        type="button"
      >
        <span>Join Discord</span>
        <img className="w-14 ml-2" src={discord} alt="Discord" />
      </button>
    </section>
  );
}
export default CommunitySection;
