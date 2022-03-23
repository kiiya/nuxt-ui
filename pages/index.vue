<template>
  <div class="min-h-screen bg-gray-50 mx-auto flex flex-col">
    <div class="flex w-full justify-between px-6 py-4">
      <div>
        <h3 class="text-xl font-semibold text-gray-700">Java House - Valley Arcade</h3>
        <p class="text-sm text-gray-600">20% Off on every coffee purchase</p>
      </div>
      <img class="w-20 h-20 rounded-lg object-cover" src="https://proenv-copy.s3-ap-southeast-1.amazonaws.com/companylogo/1581940807841blob" alt="" />
    </div>

    <div class="flex-1 bg-gray-50 border-t px-6 flex justify-between flex-col">
      <div class="mt-8 flex flex-col sm:-mx-6 md:mx-0">
        <table class="min-w-full divide-y divide-gray-300">
          <tfoot>
            <tr>
              <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">Subtotal</th>
              <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">Subtotal</th>
              <td class="pl-3 pr-4 pt-6 text-right text-xl text-gray-500 sm:pr-6 md:pr-0">$3,900.00</td>
            </tr>
            <tr>
              <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">Tax</th>
              <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">Tax</th>
              <td class="pl-3 pr-4 pt-4 text-right text-xl text-gray-500 sm:pr-6 md:pr-0">$585.00</td>
            </tr>
            <tr>
              <th scope="row" colspan="3" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0">Total</th>
              <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">Final Bill</th>
              <td class="pl-3 pr-4 pt-4 text-right text-2xl font-semibold text-gray-900 sm:pr-6 md:pr-0">$4,485.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <input type="text" class="border px-4 rounded-md py-2 self-end w-full mb-4" />
    </div>

    <div class="border-t space-y-4 rounded-bl-lg rounded-br-lg px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="uppercase tracking-wider text-xs font-semibold text-gray-400">Final Bill</div>
        <div class="text-2xl">KES 10,000</div>
      </div>
      <button class="bg-green-500 w-full py-2 text-white font-semibold rounded-md">Confirm Payment</button>
    </div>
  </div>
</template>
