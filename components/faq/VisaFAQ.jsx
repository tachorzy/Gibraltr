import { visaFAQContent } from '../../utils/faqdata.jsx'

export default function VisaFAQ(){
    return (
      <div>
          {Array.from(visaFAQContent.entries()).map(([visaFAQQuestion, visaFAQParagraph]) => {
            return(
            <details key={visaFAQQuestion}>
              <summary className={"text-stone-700 text-3xl font-semibold mb-3.5 md:pl-40 pl-10 cursor-pointer"}>
              {visaFAQQuestion}
              </summary>
              <div className={"text-stone-700 text-xl md:pl-40 pl-10 mb-7 w-2/3 leading-relaxed"}>
                {visaFAQParagraph}
              </div>
            </details>
            )
          })}
      </div>
    );
  }