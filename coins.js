
                <script type="text/javascript">

                               function MathChallenge(num) {

                                               let coins = [1, 5, 7, 9, 11];

                                              

                                               const minVal = new Array(num + 1).fill(250);

                                               minVal[0] = 0;

 

                                               for(const coin of coins) {

                                                               for(let i = 0; i <= num; i += 1) {

                                                                               if((i - coin) >= 0){

                                                                                              minVal[i] = Math.min(minVal[i], minVal[i - coin] + 1);

                                                                               }

                                                               }

                                               }

 

                                               return minVal[num] !== 250 ? minVal[num] : -1;

                               }

 

 

                               console.log(MathChallenge(25));

                </script>

