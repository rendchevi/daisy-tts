# Daisy-TTS
### Simulating Wider Spectrum of Emotions via Prosody Embedding Decomposition
_Rendi Chevi_, _Alham Fikri Aji_

_MBZUAI_

🌼 [Paper Link](https://arxiv.org/abs/2402.14523) |
💐 [Project Page](https://rendchevi.github.io/daisy-tts) |

---

> [!NOTE]
>
> 💌 Hi everyone, I've received several messages about this project and its code over the years.
> Unfortunately, I've decided to archive this project for good.
>
> My original plan was to improve upon the results in the paper and address some feedback before releasing the full code. Unfortunately, the idea just didn't end up working as well as I'd hoped.
>
> We lacked a sufficient dataset to further test the theory and improve the results, and I also struggled to come up with more clever ideas on the modeling side.
>
> And since then, I've moved on to work in another subfield and not working on TTS anymore. As time went on, this project just got naturally archived.
>
> Truly sorry to disappoint anyone who was waiting for this. It would be really cool to see future work that tries (more successfully than me!) in simulating psychological theories of emotions.

---

#### Abstract
We often verbally express emotions in a multifaceted manner, they may vary in their intensities and may be expressed not just as a single but as a mixture of emotions. This wide spectrum of emotions is well-studied in the structural model of emotions, which represents variety of emotions as derivative products of primary emotions with varying degrees of intensity. In this paper, we propose an emotional text-to-speech design to simulate a wider spectrum of emotions grounded on the structural model. Our proposed design, Daisy-TTS, incorporates a prosody encoder to learn emotionally-separable prosody embedding as a proxy for emotion. This emotion representation allows the model to simulate: (1) Primary emotions, as learned from the training samples, (2) Secondary emotions, as a mixture of primary emotions, (3) Intensity-level, by scaling the emotion embedding, and (4) Emotions polarity, by negating the emotion embedding. Through a series of perceptual evaluations, Daisy-TTS demonstrated overall higher emotional speech naturalness and emotion perceiveability compared to the baseline.

