import { generalFAQContent } from '../../utils/faqdata.jsx'

export default function GeneralFAQ(){
    return (
      <div>
          {Array.from(generalFAQContent.entries()).map(([generalFAQQuestion, generalFAQParagraph]) => {
            return(
            <details key={generalFAQQuestion}>
              <summary className={"text-stone-700 text-3xl font-semibold mb-3.5 md:pl-40 pl-10 cursor-pointer"}>
              {generalFAQQuestion}
              </summary>
              <div className={"text-stone-700 text-xl md:pl-40 pl-10 mb-7 w-1/2 leading-relaxed"}>
                {generalFAQParagraph}
              </div>
            </details>
            )
          })}
      </div>
    );
  }