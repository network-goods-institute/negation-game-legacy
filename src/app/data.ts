const items = [
  {
    title: "We should not slow down AI research.",
    id: "a",
    nbVotes: 3,
    points: 2,
    children: [
      {
        title: "Advanced AI will destroy humanity in the short term if we don't first figure out alignment.",
        id: "b",
        nbVotes: 1,
        points: 1,
        children: [
          {
            title:
              "Advanced superintelligence can exist without probabilistic computation (e.g. megacorporations). Most of the advanced capabilities can and should be developed as explainable, deterministic tooling with a very thorough security regimen, and only scaled in massively multiplayer environments with the increased capacity for scrutiny & alignment to public interest.",
            id: "c",
            nbVotes: 1,
            points: 1,
          },
        ],
      },
      {
        title:
          "We will soon have no jobs and that will cause a meaning crisis which will be unrecoverable and will cause global destabilization.",
        id: "d",
        nbVotes: 5,
        points: 1,
        children: [
          {
            title:
              "Jobs fit into three major categories: farming, manufacturing, & servicing. To survive a meaning crisis, we need to automate Maslow's hierarchy of needs, which we do to a large extent with farming, to a lesser extent with manufacturing, and to a minimal extent with servicing. The chances that global destabilization can occur to a irrevocable degree drop as core consumption is matched by abundance.",
            id: "e",
            nbVotes: 3,
            points: 2,
          },
        ],
      },
      // Add more sub-items as needed
    ],
  },
  {
    title: "The Earth is flat.",
    id: "f",
    nbVotes: 1,
    points: 1,
    children: [
      {
        title: "The speed of light is faster than 10 kph",
        id: "g",
        nbVotes: 2,
        points: 1,
      },
      { title: "We have pictures of the Earth from space.", id: "h", nbVotes: 1, points: 1 },
      // Add more sub-items as needed
    ],
  },
  {
    title: "The future of work is play.",
    id:"i",
    points: 2,
    children: [
      {
        title: "Not all work can be made to be fun.",
        id:"j",
        points: 1,
        children: [
          {
            title: "Fun in subjective - it's a matter of finding someone who finds it fun.",
            id:"k",
            points: 3,
            children: [
              {
                title: "There are empirical indicators to measure if a person is having fun or not.",
                id:"l",
                points: 1,
                children: [{ title: "No empirical indicator proves whether someone is having fun or not.", id:"m", points: 1 }],
              },
            ],
          },
        ],
      },
    ],
  },
  // Add more items as needed
];

export default items;
