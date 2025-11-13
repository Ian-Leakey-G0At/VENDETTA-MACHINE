export type Schematic = {
  id: string;
  name: string;
  artist: string;
  image_url: string;
  description: string;
  price: number;
  polar_checkout_url: string;
};

export const schematics: Schematic[] = [
  {
    id: "kinetic-echo",
    name: "Kinetic Echo",
    artist: "Alexia Vance",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMCv7Y2FWf-qlEHM8EwIy2d2A9WohrEQHzy6hZ6gbLQ7eF_btNv6AonrmJzI2NSPm08mX3FIAepNkfuEJoicc3Gbdp67zlkmXy8HNs1iSqezUkUz5IJucl3KsERFjmCJysyZbDdp7-YmxYTD6XvfLitPRF8-Hbq30hOZBkgOUjWwilf99I1i4yNYDBZvMH9Nkr0XYzvloWVBpv3tfnTLoI5iAJiZHKRSQGVErCldDjsc04F8YSahNhb13TUtktQ1Mf8oZHhJoqjH0",
    description: "A mesmerizing kinetic sculpture that captures the fluidity of motion in a static form, echoing the perpetual dance of particles in the cosmos.",
    price: 3200,
    polar_checkout_url: "/#",
  },
  {
    id: "aether-weave",
    name: "Aether Weave",
    artist: "Kai Nomad",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCU7WCY2zAabB32Rmcd7pTnq3FY__SLjFuEt8mUBLKpg1ilyA0hFmZ5IfUHJ7aJpO6Zhl5JIr_BsbJJPmAnYc45udywTPc53LzRoqAPhiSi3y3nocfNMbMvAK4fnwRPoZTeTfBYep-2x7REqmn08hwQZYgbcsWkJI3MrxkfXDj_ypdsBZO96GjMDZA7Jg2S-AqHNYkEqHZNRwLY_7d-2_THvhc46DkpLJJh29b7xtGILcq_zF3k7tCRx-_eKzhu3Qlj_L4LNm35zs0",
    description: "Digital art of intertwined glowing threads of light, representing the interconnectedness of all things in the universe.",
    price: 2750,
    polar_checkout_url: "/#",
  },
  {
    id: "chronoform",
    name: "Chronoform",
    artist: "Anya Petrova",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvsTqa_g3B68szEGydaDY2vdzltW_MdNfoIrDbKK5kZJTKiGEzXhauBdqzUoTFWOXK4MqnGI2t9HpK1unFGF93c3sw01Uegb-i4xcGp5407nxz7HRvMt6nw4b4jHewOoJmoN3TgG0zXSpnZtl5_Zaf2cDBtUJbqhrzJtiUiaKxIRrP8sHaAAJ9EOGSOu9unstp5wMQ5ipU8RpMJMRPmk1C8x2eekwpdPynYy17fBdDSKxAW0KGPKLFGsdHvu4UNiqsVYrzO7Nm73A",
    description: "A geometric form shifting through time-lapsed frames, exploring the concept of time and its perception.",
    price: 4500,
    polar_checkout_url: "/#",
  },
  {
    id: "nova-construct",
    name: "Nova Construct",
    artist: "Alexia Vance",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCL7k24UZ-5NC25_QvPY6KPpGq15Kt_JPAJPjwNm-pYhE-dtMQ9z5D_iGK6ZiTBTvaEQBiN8OeANOXao_kHmc_OFb4WgYYHl7ROVbHJQ0Vr5mzU19UYKAhubsz3IbiPUfRl5e0ODhjZEKRRsckQHUw4u3JFgQVxVL_xtC9fqe7BPJfbdG_MFOeEqeMDcdfRhLoe5vyejR0hO-G8e8waJHRAiIJd63Ip8xSkuuuh3Qmwq_qQJtQbeGce8aYqE_UX243Vb6pfF2kzvI",
    description: "A construct of crystalline structures and starlight, representing the birth of a new star and the creation of new worlds.",
    price: 5100,
    polar_checkout_url: "/#",
  },
  {
    id: "cypher-bloom",
    name: "Cypher Bloom",
    artist: "Juno",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_zpBScYpCxW2moIh8KXNuI2aNxDQfxdMJ_RqY74cStJ3XbVNdMlzEDhW5UcLdtZs5amHSmDxmIBplzJNWsfZskOg8LAjwPFhdL2mvTUFatlFpuHuetGVNqlLF4-7xDHhuTen1qp8iowNKUexY8OoJcmzqeTwGCBFhkQOH7gpgtqgpEcckqv772TyTsAG5ng0AauDonFBRUpGDh69umZBAqdLFhn8DoedWMl7ZIuGB-PTl0eIHD_7x7sb6DM6U9BCEmY_mOiMJYOA",
    description: "A mechanical flower blooming with data streams, symbolizing the intersection of nature and technology.",
    price: 1950,
    polar_checkout_url: "/#",
  },
  {
    id: "void-strider",
    name: "Void Strider",
    artist: "Kai Nomad",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuAfazk-A7TByiY_atnmwDZiwQVIPVdNxGja7EGPaBuCRnx7Wb2PxmyrvC588dzcpnBaGysnKid1Ra5q_NmImu70tg631EYRu4dwfVI0zOarVuZd4jjvNDcY_6g7jZcU-zVVY9De4KXnFHB2xbgoq7D-VAs7W-1BYAXaQpSimNG8qwaGeFhxDaIHaAvMQSrIfARP9N4dJkZZdKhI3xPYIzmXjlYGqXycJ3up8Ms0pS3L_wh0LBMWCciHPEaiQ7thK4bUoVmRA6D24",
    description: "A dark figure walking through a glitching void, representing the journey through the unknown and the embrace of chaos.",
    price: 3800,
    polar_checkout_url: "/#",
  },
  {
    id: "solaris-engine",
    name: "Solaris Engine",
    artist: "Alexia Vance",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVvX7S7pVWitmdXzeCJJVAKvXFdXJOO_kG8YLRLfYJfES66VfvYYKLow0qGTbBJOn51wTBD1-qZ64Jpz4dqKOAA00B3q-kEAwOtU9hYnEUx3PnQUbKAgwrDjrsYvnxZ66JWaL5ZIgXs-cBhwicLvLitbOtGAyjWDrHLq0HSKxt3lroaEvT9Y6CIXvT4wZR2eiev12SW4YKthnVN52vnIBgR6FWdO4MUN95WoCI-pgQczgSJbVtnvHIRD2dJMFEEKZmtqj2HqmMi-E",
    description: "Intricate golden engine powered by a miniature sun, a testament to the power of human ingenuity and the pursuit of knowledge.",
    price: 7200,
    polar_checkout_url: "/#",
  },
  {
    id: "quantum-mesh",
    name: "Quantum Mesh",
    artist: "Juno",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv0EWr2E5IDilG3FIwG3C578VdlMqK50QUS84J0Y_6y8yOEP2NJtyGHGL6C3zabOfMPH_iSKzkDjuEHyoXm_ko7sGBYqj3S-jKkmbO0KnBN1IqEgnXyngMArZ5m7CiKtsb6dry6ujDUld7dDYxBWl9Xyl5HlJqdyqjHOBE4xXUbIh_tao9GUnoRyhCQowEbC8SfoLZipY2msU-zBwyDj05CRslwxgvESqDDZftdaBuO30TVQDpmH5NNsvccExV2dJLEd-q0u3yj0I",
    description: "A web of quantum energy particles, illustrating the complex and interconnected nature of the universe at a subatomic level.",
    price: 4100,
    polar_checkout_url: "/#",
  },
  {
    id: "ephemeral-dream",
    name: "Ephemeral Dream",
    artist: "Elena Vance",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD2Uc_GoqNe3JjFV-9ZsgONURM4DQBP-15CGXX4sjD0g92mSaNDw-ERHs3FynGgtqiQZ5BLlnSI79POSwCU7uQM0kNe5Gr1pgi122vj8SbI1ZzDA7TakBSGOrtH87Z-ox03i0Y5TOfsDti3rbQ9aUtcXILR-BGI4a1pzHupQ8_LQfhaqWKirik3DATtLBi487wQIl39u7P2PGA6DRdE0iwflAlje925Nxd1UriH5-xx4NsOlQsCp47jgLjfc49CwFJNE2-YtO--NM",
    description: "\"Ephemeral Dream\" captures the fleeting beauty of a lucid dream, blending reality with the surreal. Elena Vance uses a unique mix of digital painting and algorithmic generation to create a visual symphony of color and form. The piece invites viewers to lose themselves in its intricate details, exploring the delicate balance between chaos and harmony, much like the nature of dreams themselves. It is a commentary on the transient moments of inspiration that flicker and fade in the artist's mind.",
    price: 2800,
    polar_checkout_url: "/#",
  },
];
