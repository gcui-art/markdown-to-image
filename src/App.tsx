import React, { useRef } from 'react'
import { Md2Poster, Md2PosterContent, Md2PosterHeader, Md2PosterFooter } from './packages'
// import './App.css'

function App() {
  const markdownRef = useRef<any>(null);
 
  const handleCopy = () => {
    markdownRef?.current?.handleCopy().then((res) => {
      alert('promise copy')
    });
  };
  const copySuccessCallback = () => {
    console.log('Copy Success');
  }
  const markdown = `
  # 能力媲美GPT-4，价格为其百分之一

  先看性能。
  
  和当前主流大模型相比，DeepSeek-V2毫不逊色。
  
  据悉，DeepSeek-V2拥有2360亿参数，其中每个token210亿个活跃参数，相对较少，但仍然达到了开源模型中顶级的性能，**称得上是最强的开源MoE语言模型。**
  
  研究团队构建了由8.1T token组成的高质量、多源预训练语料库。与DeepSeek 67B使用的语料库相比，该语料库的数据量特别是中文数据量更大，数据质量更高。
  
  据官网介绍，**DeepSeek-V2的中文综合能力（AlignBench）在众多开源模型中最强**，超过GPT-4，与GPT-4-Turbo，文心 4.0等闭源模型在评测中处于同一梯队。
  
  其次，DeepSeek-V2英文综合能力（MT-Bench）与最强的开源模型LLaMA3-70B处于同一梯队，超过最强MoE开源模型Mixtral8x22B。
  
  ![Image 1](https://wpimg-wscn.awtmt.com/563db83f-0183-4792-b337-0ed451ae52ee.png?imageView2/2/w/640)
  
  有分析指出，该模型的训练参数量高达8.1万亿个token，而DeepSeek V2表现出“难以置信”的训练效率，并且计算量仅为Meta Llama 3 70B 的1/5。
  
  更直观地说，**DeepSeek-V2训练所需的运算量是GPT-4 的1/20，而性能却相差不大。**
  
  有外国网友给出了高度评价：在仅有210亿个活跃参数的情况下，能达到如此强的推理能力相当惊人。
  
  > “如果属实的话，那是相当惊人的。”
  > 
  > “原来是中国公司？也许这就是‘中国队’在AI领域名列前茅的原因。”
  > 
  > **![Image 2](https://wpimg-wscn.awtmt.com/bfda51d9-84f3-4b9a-95f2-5cdf91d7daeb.png?imageView2/2/w/640)**
  
  不过，技术已经不是大模型的唯一宣传点了。
  
  作为AI技术的前沿领域，大模型更新换代之快有目共睹，再强的性能也可能在发布的下一秒就被友商反超。
  
  **因此，DeepSeek选择“卷”价格。**
  
  目前DeepSeek-V2 API的定价为：**每百万token输入1元、输出2元（32K上下文）。**
  
  **![Image 3](https://wpimg-wscn.awtmt.com/12479aef-bb03-46c2-b089-94206df0c067.png?imageView2/2/w/640)**
  
  **和友商相比，仅为GPT-4-Turbo的近百分之一。**
  
  ![Image 4](https://wpimg-wscn.awtmt.com/4c01c632-8aad-4e63-999e-db6a15deabc7.png?imageView2/2/w/640)
  
  DeepSeek表示，采用8xH800 GPU的单节点峰值吞吐量可达到每秒50000多个解码token。
  
  如果仅按输出token的API的报价计算，每个节点每小时的收入就是50.4美元，假设利用率完全充分，按照一个8xH800节点的成本为每小时15美元来计算，**DeepSeek每台服务器每小时的收益可达35.4美元，甚至能实现70%以上的毛利率。**
  
  有分析人士指出，即使服务器利用率不充分、批处理速度低于峰值能力，DeepSeek也有足够的盈利空间，同时颠覆其他大模型的商业逻辑。
  
  总结就是，**主打一个“经济实惠”。**
  
  ![Image 5](https://wpimg-wscn.awtmt.com/1361614d-ce65-4e2c-b851-50e114519080.png?imageView2/2/w/640)
  
  **有网友表示：太便宜了，充50块能用好几年。**
  
  > “日常的任务都能胜任。”
  > 
  > “开放平台送的十块钱共有500万token。”
  > 
  > ![Image 6](https://wpimg-wscn.awtmt.com/d7240aff-5e04-4f99-bb41-e087486be7e4.png?imageView2/2/w/640)
  
  全新创新架构，支持开源
  -----------
  
  价格是怎么被打下去的？
  
  来自DeepSeek-V2的全新架构。
  
  据悉，DeepSeek-V2采用Transformer架构，其中每个Transformer块由一个注意力模块和一个前馈网络（FFN）组成，**并且在注意力机制和FFN方面，研究团队设计并采用了创新架构。**
  
  ![Image 7](https://wpimg-wscn.awtmt.com/0fe7e34c-43d9-4c7d-b913-b23100003ff9.png?imageView2/2/w/640)
  
  ![Image 8](https://wpimg-wscn.awtmt.com/d170fd1d-006e-43d1-8fe8-a0b11dd10a2b.png?imageView2/2/w/640)
  
  [据介绍](https://finance.sina.com.cn/tech/roll/2024-05-07/doc-inaukqpz0548287.shtml)，一方面，该研究设计了MLA，利用低秩键值联合压缩来消除推理时键值缓存的瓶颈，从而支持高效推理。
  
  另一方面，对于FFN，该研究采用高性能MoE架构 ——DeepSeekMoE，以经济的成本训练强大的模型。
  
  ![Image 9](https://wpimg-wscn.awtmt.com/ebd5b74e-8e56-402e-91bb-5bd6c969a9e1.png?imageView2/2/w/640)
  
  DeepSeek-V2基于高效且轻量级的框架HAI-LLM进行训练，采用16-way zero-bubble pipeline并行、8-way专家并行和ZeRO-1数据并行。
  
  **鉴于DeepSeek-V2的激活参数相对较少，并且重新计算部分算子以节省激活内存，无需张量并行即可训练，因此DeepSeek-V2减少了通信开销。**
  
  并且，DeepSeek-V2完全开源（[https://huggingface.co/deepseek-ai](https://huggingface.co/deepseek-ai)），可免费上用，开源模型支持128K上下文，对话官网/API支持32K上下文（约24000个token），还兼容OpenAI API接口。
  
  ![Image 10](https://wpimg-wscn.awtmt.com/4f96746d-d525-47c8-aba5-289743524337.png?imageView2/2/w/640)
  
  不仅性能好，还这么便宜，甚至直接兼容OpenAI API，DeepSeek-V2这手“王炸”，换谁可能都没法拒绝。
  
  **外国网友直呼：没理由不用！**
  
  > DeepSeek-V2的性能水平几乎和与GPT-4一致、提供的API与OpenAI API兼容、可以免费使用500个token、付费版本价格仅为GPT-4的1/100……
  > 
  > “没有理由不用它。”
  > 
  > **![Image 11](https://wpimg-wscn.awtmt.com/2c443984-f413-4f01-81e4-fcb1ed2b5c85.png?imageView2/2/w/640)**
  
  本文来自[微信公众号“硬AI”](https://mp.weixin.qq.com/s/2rfpVmedXuAVybneRhpkIg)，关注更多AI前沿资讯请[移步这里](https://mp.weixin.qq.com/s/2rfpVmedXuAVybneRhpkIg)
  
  ![Image 12](https://wpimg-wscn.awtmt.com/a2d73611-121b-4320-b724-153afec77339.png?imageView2/2/w/640)
  
  风险提示及免责条款
  
  市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。
  `

  return (
    <main>
      <Md2Poster theme="SpringGradientWave" size='mobile' ref={markdownRef} copySuccessCallback={copySuccessCallback} canCopy>
        <Md2PosterHeader className='flex justify-between items-center px-4'>
          <span>
            @Nickname
          </span>
          <span>
            {new Date().toISOString().slice(0, 10)}
          </span>
        </Md2PosterHeader>
        <Md2PosterContent>{markdown}</Md2PosterContent>
        <Md2PosterFooter className='flex justify-center items-center gap-1'>
           <button onClick={handleCopy} className='border p-2 rounded border-white'>Copy Image</button>
        </Md2PosterFooter>
      </Md2Poster>
    </main>
  )
}

export default App
