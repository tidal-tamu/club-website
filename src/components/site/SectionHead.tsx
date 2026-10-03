/** One word does the job: every section is introduced by its name and nothing else. */
export default function SectionHead({ title, id }: { title: string; id: string }) {
    return (
        <h2 className="sh rv" id={id}>
            {title}
        </h2>
    );
}
