import dynamic from 'next/dynamic'
import MdDocs from '@/markdown/docs.mdx'
import Section from '@/components/Section'

const EditProps = dynamic(() => import('./editProps'), {
  ssr: false,
 })

export default function Docs() {
  return (
    <Section className="py-4">
      <article className="prose lg:prose-xl">
        <MdDocs />
      </article>
      <EditProps />
    </Section>
  )
}
