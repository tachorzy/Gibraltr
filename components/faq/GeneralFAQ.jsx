import { generalFAQContent } from '../../utils/faqdata.jsx'

export default function GeneralFAQ(){
    return (
      <div>
          {Array.from(generalFAQContent.entries()).map(([generalFAQQuestion, generalFAQParagraph]) => {
            return(
            <details key={generalFAQQuestion}>
              <summary className={"text-stone-700 text-3xl font-semibold mb-3.5 ml-16 cursor-pointer"}>
              {generalFAQQuestion}
              </summary>
              <div className={"text-stone-700 text-xl ml-24 mb-7 w-1/2 leading-relaxed"}>
                {generalFAQParagraph}
              </div>
            </details>
            )
          })}
      </div>
    );
  }