import MdDocs from '@/markdown/docs.mdx'
import Section from '@/components/Section'

export default function Docs() {
  return (
    <Section className="py-4">
      <article className="prose lg:prose-xl">
        <MdDocs />
      </article>
    </Section>
  )
}
