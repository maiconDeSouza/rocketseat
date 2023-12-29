import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TR } from '../../components/TR'


export function Transaction() {
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <section className='w-full max-w-[1120px] mb-0 mt-16 mx-auto px-6 py-0'>
        <table className='w-full border-separate border-spacing-x-0 border-spacing-y-2 mt-6'>
          <tbody>
            <TR title='Desenvolvimento de site' value={12000}  type='Venda' date={new Date(2014, 1, 11)}/>
            <TR title='Lanche' value={-59}  type='compra' date={new Date}/>
            <TR title='Freela' value={2000}  type='Venda' date={new Date}/>
          
          </tbody>
        </table>
      </section>
    </div>
  )
}
