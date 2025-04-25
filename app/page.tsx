import Image from "next/image";
import { DetailsScrollifier } from "./DetailsScrollifier";

function Loink(props: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={props.href}
      className="text-blue-600 underline decoration-2 underline-offset-4 visited:text-purple-600 hover:text-blue-800 hover:visited:text-purple-800 dark:text-blue-400 dark:visited:text-purple-400 dark:hover:text-blue-600 dark:hover:visited:text-purple-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}

function Details(props: { children: React.ReactNode; summary: string }) {
  return (
    <details
      className="group mb-4 rounded-lg border shadow-sm dark:border-gray-700"
      name="my-sections"
    >
      <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4 transition-colors duration-200 group-open:rounded-b-none hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700">
        <span className="font-medium text-gray-800 dark:text-gray-200">
          {props.summary}
        </span>
        <svg
          className="h-5 w-5 transform text-gray-500 transition-transform duration-200 group-open:rotate-90 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </summary>
      <div className="rounded-b-lg border-t bg-white p-4 lg:p-6 dark:border-gray-700 dark:bg-gray-900">
        {props.children}
      </div>
    </details>
  );
}

function PolymarketEmbed(props: { src: string; title: string }) {
  return (
    <div className="flex justify-center">
      <iframe
        title={`Polymarket: ${props.title}`}
        src={`https://embed.polymarket.com/market.html?market=${props.src}&features=volume&theme=light`}
        width="360"
        height="180"
        frameBorder="0"
        className="-mx-2 block dark:hidden"
        loading="lazy"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
      />
      <iframe
        title={`Polymarket: ${props.title}`}
        src={`https://embed.polymarket.com/market.html?market=${props.src}&features=volume&theme=dark`}
        width="360"
        height="180"
        frameBorder="0"
        className="-mx-2 hidden dark:block"
        loading="lazy"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function MetaculusEmbed(props: { id: string; title: string }) {
  return (
    <div className="my-4 flex justify-center">
      <iframe
        title={`Metaculus: ${props.title}`}
        src={`https://www.metaculus.com/questions/embed/${props.id}`} //&embedTitle=${props.title} theme=light& ?zoom=all
        className="min-h-130 w-full min-w-90 lg:h-115"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function ManifoldEmbed(props: { name: string; title: string }) {
  return (
    <div className="flex justify-center">
      <iframe
        title={`Manifold: ${props.title}`}
        src={`https://manifold.markets/${props.name}`}
        loading="lazy"
        sandbox="allow-scripts"
        referrerPolicy="no-referrer"
        className="h-70 w-100 max-w-full border border-gray-300 dark:border-gray-700"
      />
    </div>
  );
}
export default function Home() {
  return (
    <div className="prose lg:prose-xl dark:prose-invert mx-auto mt-8 flex min-h-screen max-w-4xl flex-col justify-between p-2 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="mb-1! px-4">
          Are we{" "}
          <span className="text-blue-700 dark:text-blue-500">AI Math</span> yet?
        </h1>
        <p className="px-4">
          Is there a computer system that, given a theorem statement, can prove
          it more reliably than 100 top mathematicians given 100 years?
        </p>
        <p className="text-center text-5xl">Not yet.</p>
        <Details summary="Frontier Math Benchmark">
          <p>
            FrontierMath is a benchmark by{" "}
            <Loink href="https://epoch.ai/">Epoch AI</Loink> in collaboration
            with <Loink href="https://openai.com/">OpenAI</Loink> intended to
            test the limits of AI mathematics. It was announced in November
            2024.
          </p>
          <p>
            It uses 290 questions where the answers are mathematical objects
            such as integers and matrices.
          </p>
          <figure className="">
            <Image
              alt="Frontier Math evaluation graph"
              src="/epoch-frontier.svg"
              width={960}
              height={540}
              className="mx-auto"
            />
            <div className="text-center">
              FrontierMath evaluations (
              <Loink href="https://epoch.ai/data/ai-benchmarking-dashboard">
                source
              </Loink>
              )
            </div>
          </figure>
          <div className="text-left">Commentary:</div>
          <ul>
            <li>
              <Loink href="https://epoch.ai/frontiermath">
                Epoch AI FrontierMath information page
              </Loink>
            </li>
            <li>
              <Loink href="https://xenaproject.wordpress.com/2024/12/22/can-ai-do-maths-yet-thoughts-from-a-mathematician/">
                Can AI do maths yet? Thoughts from a mathematician
              </Loink>{" "}
              – Kevin Buzzard, Dec 2024.
            </li>
          </ul>
        </Details>
        <Details summary="Math Olympiads">
          <p>
            Math olympiads are competitions where contestants solve mathematical
            problems. The most famous one is the{" "}
            <Loink href="https://en.wikipedia.org/wiki/International_Mathematical_Olympiad">
              International Mathematical Olympiad
            </Loink>
            , a competition for high-school students from across the globe.
          </p>
          <p>
            There is much interest in getting AI to be good at these
            competitions. In November 2023,{" "}
            <Loink href="https://www.xtxmarkets.com/">XTX Markets</Loink>{" "}
            launched the <Loink href="https://aimoprize.com/">AIMO prize</Loink>
            , with the Grand Prize of $5M for the first publicly shared AI model
            capable of winning a gold medal in the IMO, and an additional $5M
            for partial progress prizes. The AIMO prize requires the same
            input/output as human contestants (not computer-formal).
          </p>
          <h2>AlphaProof and AlphaGeometry 2</h2>
          <p>
            In July 2024, Google DeepMind announced{" "}
            <Loink href="https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/">
              AI achieves silver-medal standard solving International
              Mathematical Olympiad problems
            </Loink>
            . On hand-formalized problem statements, the systems AlphaProof and
            AlphaGeometry 2 achieved a score at the silver medal level on the
            IMO.
          </p>
          <p>
            The types of problems on the IMO seem to present different levels of
            challenge for AI solutions:
          </p>
          <blockquote>
            AlphaProof solved two algebra problems and one number theory problem
            by determining the answer and proving it was correct. This included
            the hardest problem in the competition, solved by only five
            contestants at this year’s IMO. AlphaGeometry 2 proved the geometry
            problem, while the two combinatorics problems remained unsolved.
          </blockquote>
          <h2>MiniF2F</h2>
          <p>
            <Loink href="https://github.com/openai/miniF2F">MiniF2F</Loink> is a
            benchmark of AI formal mathematics. It consists of 244 {'"'}exercise
            statements from olympiads (AMC, AIME, IMO) as well as high-school
            and undergraduate maths classes{'"'}.
          </p>
          <p>
            The current state of the art seems to be{" "}
            <Loink href="https://github.com/haoxiongliu/ProofAug">
              ProofAug
            </Loink>
            , solving 66% of the problems.
          </p>
          <figure>
            <Image
              height="350"
              width="600"
              src="/miniF2F-paperswithcode.svg"
              alt="Chart of AI performance on MiniF2F"
              className="mx-auto"
            />
            <figcaption className="text-center">
              MiniF2F performance across time chart from{" "}
              <Loink href="https://paperswithcode.com/sota/automated-theorem-proving-on-minif2f-test">
                Papers With Code
              </Loink>{" "}
              (the top-right dot is ProofAug)
            </figcaption>
          </figure>

          <p>Other links:</p>
          <ul>
            <li>
              <Loink href="https://github.com/facebookresearch/miniF2F">
                MiniF2F fork by Meta
              </Loink>
            </li>
            <li>
              <Loink href="https://imo-grand-challenge.github.io/">
                IMO Grand Challenge
              </Loink>
            </li>
          </ul>
        </Details>

        <Details summary="Millennium Prize">
          <p>
            The{" "}
            <Loink href="https://www.claymath.org/millennium-problems/">
              Millennium Prize Problems
            </Loink>{" "}
            are seven important problems in mathematics for which the{" "}
            <Loink href="https://www.claymath.org/">
              Clay Mathematics Institute
            </Loink>{" "}
            has offered a prize of $1 million per problem. Currently, 1 problem
            has been solved by a human, 0 have been solved by AI, and 6 remain
            unsolved.
          </p>
          <table>
            <thead>
              <tr>
                <th>Problem</th>
                <th>Human or AI?</th>
                <th>Solved By / Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Birch and Swinnerton‑Dyer Conjecture</td>
                <td>❓</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Hodge Conjecture</td>
                <td>❓</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Navier‑Stokes Equation</td>
                <td>❓</td>
                <td>—</td>
              </tr>
              <tr>
                <td>{`P vs NP`}</td>
                <td>❓</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Poincaré Conjecture</td>
                <td>🧑</td>
                <td>Grigori Perelman, 2003</td>
              </tr>
              <tr>
                <td>Riemann Hypothesis</td>
                <td>❓</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Yang–Mills Existence and Mass Gap</td>
                <td>❓</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </Details>
        <Details summary="Prediction Markets">
          <Loink href="https://en.wikipedia.org/wiki/Prediction_market">
            Prediction markets
          </Loink>{" "}
          are a social technology that crowdsources predictions using financial
          incentives. Here included are:
          <ol>
            <li>
              <Loink href="https://polymarket.com/">Polymarket</Loink>:
              real-money prediction market site with curated questions.
            </li>
            <li>
              <Loink href="https://manifold.markets/">Manifold</Loink>:
              play-money prediction market site with user-submitted questions.
            </li>
            <li>
              <Loink href="https://www.metaculus.com/">Metaculus</Loink>:
              market-adjacent forecasting site.
            </li>
          </ol>
          Prediction markets theoretically allow us to get probabilities of
          future events without trusting any specific authority. However, on
          topics such as exciting new technologies, even short-term, real-money
          prediction markets{" "}
          <Loink href="https://polymarket.com/event/is-the-room-temp-superconductor-real">
            can be quite dumb
          </Loink>
          .<h2 className="text-center">IMO in 2025</h2>
          <div className="flex w-full flex-wrap justify-center gap-2">
            {/*grid grid-cols-1 gap-4 sm:grid-cols-2 */}
            <div className="flex flex-col flex-wrap justify-center gap-2">
              <ManifoldEmbed
                title="Will an AI get gold on any International Math Olympiad by the end of 2025?"
                name="Austin/will-an-ai-get-gold-on-any-internat"
              />
              <PolymarketEmbed
                title="AI wins IMO gold medal in 2025?"
                src="ai-wins-math-olympiad-in-2025"
              />
            </div>
            <MetaculusEmbed
              id="26754"
              title="When will a publicly-available LLM achieve gold on the International Math Olympiad?"
            />
          </div>
          <h2 className="text-center">FrontierMath in 2025</h2>
          <div className="flex w-full flex-wrap justify-center gap-2">
            <ManifoldEmbed
              title="Will any AI model score >80% on Epoch's Frontier Math Benchmark in 2025?"
              name="dog/will-any-ai-model-score-80-on-epoch"
            />
            <PolymarketEmbed
              title="AI model scores ≥ 90% on FrontierMath Benchmark in 2025?"
              src="ai-model-scores-90-on-frontiermath-benchmark-in-2025"
            />
          </div>
          <h2 className="text-center">Long term</h2>
          <div className="flex w-full flex-wrap justify-center gap-2">
            <MetaculusEmbed
              id="11671"
              title="When will AI be capable of getting a perfect score on the Putnam Mathematical Competition?"
            />
            <MetaculusEmbed
              id="4880"
              title="When will a computer program be listed as an author in journal article in the Annals of Mathematics?"
            />
            <MetaculusEmbed
              id="4923"
              title="Will the next Millennium Prize Problem be solved by AI?"
            />
            <MetaculusEmbed
              id="20229"
              title="In what year will the XTX AI International Math Olympiad main prize be won?"
            />
            <MetaculusEmbed
              id="11674"
              title="When will AI be capable of getting a perfect score on the Miklós Schweitzer Competition?"
            />
            <ManifoldEmbed
              title="Will AI be capable of producing an Annals-quality math paper for $100k by March 2030?"
              name="TamayBesiroglu/will-ai-be-capable-of-producing-ann"
            />
          </div>
        </Details>
        <Details summary="Other links">
          <ul>
            <li>
              <Loink href="https://paperswithcode.com/task/automated-theorem-proving">
                Papers With Code – Automated theorem proving
              </Loink>
            </li>
            <li>
              <Loink href="https://paperswithcode.com/task/mathematical-reasoning">
                Papers With Code – Mathematical reasoning
              </Loink>
            </li>
            <li>
              <Loink href="https://epoch.ai/data/ai-benchmarking-dashboard">
                Epoch AI Benchmarking Hub
              </Loink>
            </li>
            <li>
              <Loink href="https://terrytao.wordpress.com/mastodon-posts/#:~:text=AI%2C%20proof%20assistants%2C%20and%20other%20machine%20assistants">
                Mastodon posts about AI
              </Loink>{" "}
              – Terence Tao, 2022–2025
            </li>
            <li>
              <Loink href="https://xenaproject.wordpress.com/2025/01/20/think-of-a-number/">
                Think of a number
              </Loink>{" "}
              – Kevin Buzzard, Jan 2025.
            </li>
            <li>
              <Loink href="https://xenaproject.wordpress.com/2025/03/16/think-of-a-number-an-update/">
                Think of a number: an update
              </Loink>{" "}
              – Kevin Buzzard, March 2025
            </li>
          </ul>
        </Details>
      </main>
      <footer className="mt-10 border-t border-gray-200 pb-4 text-sm dark:border-gray-700">
        <div className="flex flex-col gap-3 px-4 py-6 text-center">
          <div className="">
            Contribute on{" "}
            <Loink href="https://github.com/mjgrzymek/are-we-ai-math-yet">
              GitHub
            </Loink>
          </div>
          <div className="">
            Made by <Loink href="https://x.com/MJGrzymek">MJ Grzymek</Loink>
          </div>
        </div>
        <DetailsScrollifier />
      </footer>
    </div>
  );
}
